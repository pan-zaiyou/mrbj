import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import qs from "qs";
import type { AxiosError, AxiosRequestConfig } from "axios";

// project imports
import instance from "@/middleware/api";
import { dispatch } from "@/store";
import { login } from "@/store/reducers/auth";

// models
import type ApiResponse from "@/model/api_response";
import type { LoginPayload, LoginResponse } from "@/model/login";
import type User from "@/model/user";
import type Subscription from "@/model/subscription";
import type Notice from "@/model/notice";
import type { UserConfig, GuestConfig } from "@/model/config";
import type { ResetPasswordPayload } from "@/model/reset_password";
import type { RegisterPayload } from "@/model/register";
import type SendMailPayload from "@/model/send_mail";
import type Ticket from "@/model/ticket";
import type { TicketPayload, ReplyTicketPayload } from "@/model/ticket";
import type Knowledge from "@/model/knowledge";
import type { KnowledgeListResponse, KnowledgePayload } from "@/model/knowledge";

type AxiosBaseQueryFn = BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig["method"];
    body?: AxiosRequestConfig["data"];
    params?: AxiosRequestConfig["params"];
    headers?: AxiosRequestConfig["headers"];
  },
  any,
  {
    status: number;
    message: string;
    errors: Record<string | number | symbol, string[]> | null;
  }
>;

const axiosBaseQuery: () => AxiosBaseQueryFn =
  () =>
  async ({ url, method, body, headers, params }) => {
    try {
      const response = await instance.request<ApiResponse>({
        url,
        method,
        data: body,
        headers,
        params
      });

      if (response.status !== 200) {
        return {
          error: {
            status: response.status,
            message: response.data.message || response.statusText,
            errors: response.data.errors || null
          }
        };
      }

      return { data: response.data.data };
    } catch (error) {
      const err: AxiosError<ApiResponse> = error as AxiosError<ApiResponse>;

      return {
        error: {
          status: err.response?.status || 500,
          message: err.response?.data?.message || err.message,
          errors: err.response?.data?.errors || null
        }
      };
    }
  };

const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["User", "Subscription", "Plan", "Notice", "Ticket", "Knowledge"],
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (body) => ({
        url: "/passport/auth/login",
        method: "POST",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
      transformResponse: (response: LoginResponse) => {
        localStorage.setItem("gfw_token", response.auth_data);
        dispatch(
          login({
            isAdmin: response.is_admin
          })
        );
        return response;
      },
      invalidatesTags: ["User", "Subscription"]
    }),
    getUserInfo: builder.query<User, void>({
      query: () => ({
        url: "/user/info",
        method: "GET"
      }),
      providesTags: (result) => [
        { type: "User", id: result?.uuid },
        { type: "User", id: "LIST" }
      ],
      keepUnusedDataFor: 3600
    }),
    getUserSubscription: builder.query<Subscription, void>({
      query: () => ({
        url: "/user/getSubscribe",
        method: "GET"
      }),
      providesTags: (result) => [
        { type: "Subscription", id: result?.uuid },
        { type: "Plan", id: result?.plan.id }
      ]
    }),
    // 0: 未支付的订单数 1: 未处理的工单数 2: 邀请的用户数
    getUserStat: builder.query<number[], void>({
      query: () => ({
        url: "/user/getStat",
        method: "GET"
      })
    }),
    getNotices: builder.query<Notice[], void>({
      query: () => ({
        url: "/user/notice/fetch",
        method: "GET"
      }),
      providesTags: (result) => [
        ...(result?.map((notice) => ({ type: "Notice" as const, id: notice.id })) || []),
        { type: "Notice" as const, id: "LIST" }
      ]
    }),
    getUserConfig: builder.query<UserConfig, void>({
      query: () => ({
        url: "/user/comm/config",
        method: "GET"
      })
    }),
    getGuestConfig: builder.query<GuestConfig, void>({
      query: () => ({
        url: "/guest/comm/config",
        method: "GET"
      })
    }),
    sendEmailVerify: builder.mutation<boolean, SendMailPayload>({
      query: (body) => ({
        url: "/passport/comm/sendEmailVerify",
        method: "POST",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    }),
    resetPassword: builder.mutation<boolean, ResetPasswordPayload>({
      query: (body) => ({
        url: "/passport/auth/forget",
        method: "POST",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    }),
    register: builder.mutation<LoginResponse, RegisterPayload>({
      query: (body) => ({
        url: "/passport/auth/register",
        method: "POST",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
      transformResponse: (response: LoginResponse) => {
        localStorage.setItem("gfw_token", response.auth_data);
        dispatch(
          login({
            isAdmin: response.is_admin
          })
        );
        return response;
      },
      invalidatesTags: ["User", "Subscription"]
    }),
    getTickets: builder.query<Omit<Ticket, "message">[], void>({
      query: () => ({
        url: "/user/ticket/fetch",
        method: "GET"
      }),
      providesTags: (result) => [
        ...(result?.map((ticket) => ({ type: "Ticket" as const, id: ticket.id })) || []),
        { type: "Ticket" as const, id: "LIST" }
      ]
    }),
    getTicket: builder.query<Ticket, number>({
      query: (id) => ({
        url: "/user/ticket/fetch",
        method: "GET",
        params: {
          id
        }
      }),
      providesTags: (result) => [{ type: "Ticket" as const, id: result?.id }]
    }),
    saveTicket: builder.mutation<boolean, TicketPayload>({
      query: (body) => ({
        url: "/user/ticket/save",
        method: "POST",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }),
      invalidatesTags: [{ type: "Ticket", id: "LIST" }]
    }),
    replyTicket: builder.mutation<boolean, ReplyTicketPayload>({
      query: (body) => ({
        url: "/user/ticket/reply",
        method: "POST",
        body: qs.stringify(body),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    }),
    getKnowledgeList: builder.query<Record<string, KnowledgeListResponse[]>, Omit<KnowledgePayload, "id">>({
      query: ({ language, keyword }) => ({
        url: "/user/knowledge/fetch",
        method: "GET",
        params: {
          language,
          keyword
        }
      }),
      providesTags: (result, error, arg) => [
        { type: "Knowledge", id: "LIST" },
        { type: "Knowledge", id: "LIST_" + arg.language }
      ]
    }),
    getKnowledge: builder.query<Knowledge, Omit<KnowledgePayload, "keyword">>({
      query: ({ id, language }) => ({
        url: "/user/knowledge/fetch",
        method: "GET",
        params: {
          id,
          language
        }
      }),
      providesTags: (result, error, arg) => [
        { type: "Knowledge", id: arg.id },
        { type: "Knowledge", id: arg.id + "_" + arg.language }
      ]
    })
  })
});

export const {
  useLoginMutation,
  useGetUserInfoQuery,
  useGetUserSubscriptionQuery,
  useGetUserConfigQuery,
  useGetGuestConfigQuery,
  useGetNoticesQuery,
  useGetUserStatQuery,
  useSendEmailVerifyMutation,
  useResetPasswordMutation,
  useRegisterMutation,
  useGetTicketsQuery,
  useGetTicketQuery,
  useSaveTicketMutation,
  useReplyTicketMutation,
  useGetKnowledgeListQuery,
  useGetKnowledgeQuery
} = api;
export default api;