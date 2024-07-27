(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9742], {
    20511: function(e, r, s) {
        "use strict";
        s.d(r, {
            D: function() {
                return g
            }
        });
        var o = s(30950)
          , a = s(15882)
          , n = s(50959)
          , i = s(45924)
          , t = s(66217)
          , l = s(71020)
          , c = s(26666)
          , d = s(63992)
          , u = s(49330)
          , m = s(49863)
          , p = s(2433)
          , h = s(11527);
        let f = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"]
          , _ = e=>{
            let {classes: r, color: s, focused: o, disabled: a, error: n, filled: i, required: l} = e
              , c = {
                root: ["root", `color ${(0,
                d.Z)(s)}`, a && "disabled", n && "error", i && "filled", o && "focused", l && "required"],
                asterisk: ["asterisk", n && "error"]
            };
            return (0,
            t.Z)(c, p.M, r)
        }
          , g = (0,
        m.ZP)("label", {
            name: "MuiFormLabel",
            slot: "Root",
            overridesResolver: ({ownerState: e},r)=>(0,
            a.Z)({}, r.root, "secondary" === e.color && r.colorSecondary, e.filled && r.filled)
        })(({theme: e, ownerState: r})=>(0,
        a.Z)({
            color: (e.vars || e).palette.text.secondary
        }, e.typography.body1, {
            lineHeight: "1.4375em",
            padding: 0,
            position: "relative",
            [`&.${p.Z.focused}`]: {
                color: (e.vars || e).palette[r.color].main
            },
            [`&.${p.Z.disabled}`]: {
                color: (e.vars || e).palette.text.disabled
            },
            [`&.${p.Z.error}`]: {
                color: (e.vars || e).palette.error.main
            }
        }))
          , x = (0,
        m.ZP)("span", {
            name: "MuiFormLabel",
            slot: "Asterisk",
            overridesResolver: (e,r)=>r.asterisk
        })(({theme: e})=>({
            [`&.${p.Z.error}`]: {
                color: (e.vars || e).palette.error.main
            }
        }))
          , Z = n.forwardRef(function(e, r) {
            let s = (0,
            u.Z)({
                props: e,
                name: "MuiFormLabel"
            })
              , {children: n, className: t, component: d="label"} = s
              , m = (0,
            o.Z)(s, f)
              , p = (0,
            c.Z)()
              , Z = (0,
            l.Z)({
                props: s,
                muiFormControl: p,
                states: ["color", "required", "focused", "disabled", "error", "filled"]
            })
              , w = (0,
            a.Z)({}, s, {
                color: Z.color || "primary",
                component: d,
                disabled: Z.disabled,
                error: Z.error,
                filled: Z.filled,
                focused: Z.focused,
                required: Z.required
            })
              , b = _(w);
            return (0,
            h.jsxs)(g, (0,
            a.Z)({
                as: d,
                ownerState: w,
                className: (0,
                i.Z)(b.root, t),
                ref: r
            }, m, {
                children: [n, Z.required && (0,
                h.jsxs)(x, {
                    ownerState: w,
                    "aria-hidden": !0,
                    className: b.asterisk,
                    children: [" ", "*"]
                })]
            }))
        });
        r.Z = Z
    },
    2433: function(e, r, s) {
        "use strict";
        s.d(r, {
            M: function() {
                return n
            }
        });
        var o = s(69197)
          , a = s(4333);
        function n(e) {
            return (0,
            a.Z)("MuiFormLabel", e)
        }
        let i = (0,
        o.Z)("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
        r.Z = i
    },
    37241: function(e, r, s) {
        "use strict";
        var o = s(50959);
        let a = ()=>{
            let e = (0,
            o.useRef)(!1);
            return (0,
            o.useEffect)(()=>(e.current = !1,
            ()=>{
                e.current = !0
            }
            ), []),
            e
        }
        ;
        r.Z = a
    },
    97475: function(e, r, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/forgot-password", function() {
            return s(63443)
        }
        ])
    },
    63443: function(e, r, s) {
        "use strict";
        s.r(r),
        s.d(r, {
            default: function() {
                return I
            }
        });
        var o = s(11527)
          , a = s(50959)
          , n = s(26452)
          , i = s(78640)
          , t = s.n(i)
          , l = s(20606)
          , c = s(98821)
          , d = s(21869)
          , u = s(25642)
          , m = s(28488)
          , p = s(61066)
          , h = s(10596)
          , f = s(64962)
          , _ = s(38257)
          , g = s(92776)
          , x = s(50726)
          , Z = s(96583)
          , w = s(8279)
          , b = s(84845)
          , j = s(82515)
          , v = s(87980)
          , y = s(7052)
          , S = s(12530)
          , k = s(99203)
          , P = s(94729)
          , C = s(85819)
          , q = s(49773)
          , B = s(42938)
          , E = s(44604)
          , R = s(95317)
          , F = s(49493)
          , $ = s(37241)
          , N = s(44806)
          , L = s(76831)
          , M = s(76071)
          , D = s(12318)
          , W = s(3697)
          , G = s(61104)
          , V = s(28222)
          , z = s(34447)
          , A = s(76136)
          , X = function() {
            var e, r = (0,
            q.Z)(), s = (0,
            n.$G)().t, i = (0,
            $.Z)(), t = (0,
            D.useRouter)(), u = (0,
            C.Ds)().enqueueSnackbar, m = (0,
            x.Z)((0,
            G.gL)(), 1)[0], p = (0,
            x.Z)((0,
            a.useState)(), 2), h = p[0], X = p[1], I = (0,
            x.Z)((0,
            a.useState)(!1), 2), O = I[0], H = I[1], T = (0,
            a.useCallback)(function() {
                H(function(e) {
                    return !e
                })
            }, []), J = (0,
            a.useCallback)(function(e) {
                e.preventDefault()
            }, []), K = (0,
            a.useCallback)(function(e) {
                var r = (0,
                A.X)(e);
                X((0,
                A.V)(r))
            }, []);
            return (0,
            a.useEffect)(function() {
                K("")
            }, [K]),
            (0,
            o.jsx)(o.Fragment, {
                children: (0,
                o.jsx)(F.J9, {
                    initialValues: {
                        email: "",
                        password: "",
                        password_confirm: "",
                        email_code: "",
                        submit: null
                    },
                    validationSchema: R.Ry().shape({
                        email: R.Z_().email(s("forgot_password.email_invalid").toString()).max(255, s("forgot_password.email_max", {
                            count: 255
                        }).toString()).required(s("forgot_password.email_required").toString()),
                        password: R.Z_().max(255, s("forgot_password.password_max", {
                            count: 255
                        }).toString()).required(s("forgot_password.password_required").toString()),
                        password_confirm: R.Z_().oneOf([R.iH("password"), ""], s("forgot_password.password_confirm_invalid").toString()).required(s("forgot_password.password_confirm_required").toString()),
                        email_code: R.Z_().min(6, s("forgot_password.email_code_min", {
                            count: 6
                        }).toString()).max(6, s("forgot_password.email_code_max", {
                            count: 6
                        }).toString()).required(s("forgot_password.email_code_required").toString())
                    }),
                    onSubmit: (e = (0,
                    f.Z)(function(e, r) {
                        var o, a, n, l;
                        return (0,
                        Z.__generator)(this, function(c) {
                            switch (c.label) {
                            case 0:
                                if (o = r.setErrors,
                                a = r.setStatus,
                                n = r.setSubmitting,
                                6 !== e.email_code.length)
                                    return a({
                                        success: !1
                                    }),
                                    o({
                                        email_code: s("forgot_password.email_code_invalid").toString()
                                    }),
                                    [2];
                                c.label = 1;
                            case 1:
                                return c.trys.push([1, 3, 4, 5]),
                                [4, m({
                                    email: e.email,
                                    password: e.password,
                                    email_code: e.email_code
                                })];
                            case 2:
                                return c.sent(),
                                a({
                                    success: !0
                                }),
                                n(!1),
                                u(s("notice::forgot_password.reset_success"), {
                                    variant: "success"
                                }),
                                (0,
                                M.B)("reset_password", {
                                    category: "auth",
                                    label: "reset_password",
                                    email: e.email,
                                    success: !0
                                }),
                                t.push("/login"),
                                [3, 5];
                            case 3:
                                return console.error("Error in reset password", l = c.sent()),
                                a({
                                    success: !1
                                }),
                                o(l.errors || {
                                    submit: l.message
                                }),
                                n(!1),
                                (0,
                                M.B)("reset_password", {
                                    category: "auth",
                                    label: "reset_password",
                                    email: e.email,
                                    success: !1,
                                    error: l.message
                                }),
                                [3, 5];
                            case 4:
                                return i.current && n(!1),
                                [7];
                            case 5:
                                return [2]
                            }
                        })
                    }),
                    function(r, s) {
                        return e.apply(this, arguments)
                    }
                    ),
                    children: function(e) {
                        var a = e.errors
                          , n = e.handleBlur
                          , i = e.handleChange
                          , t = e.handleSubmit
                          , u = e.isSubmitting
                          , m = e.touched
                          , p = e.values
                          , f = e.setValues;
                        return (0,
                        o.jsx)("form", {
                            noValidate: !0,
                            onSubmit: t,
                            children: (0,
                            o.jsxs)(l.ZP, {
                                container: !0,
                                spacing: 3,
                                children: [(0,
                                o.jsx)(l.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0,
                                    o.jsxs)(c.Z, {
                                        spacing: 1,
                                        children: [(0,
                                        o.jsx)(w.Z, {
                                            htmlFor: "email",
                                            children: s("forgot_password.email")
                                        }), (0,
                                        o.jsx)(b.Z, {
                                            fullWidth: !0,
                                            error: Boolean(m.email && a.email),
                                            id: "email",
                                            type: "email",
                                            value: p.email,
                                            name: "email",
                                            onBlur: n,
                                            onChange: i,
                                            placeholder: "user@example.com",
                                            inputProps: {},
                                            endAdornment: (0,
                                            o.jsx)(V.Z, {
                                                email: p.email
                                            })
                                        }), m.email && a.email && (0,
                                        o.jsx)(j.Z, {
                                            error: !0,
                                            id: "helper-text-email-signup",
                                            children: a.email
                                        })]
                                    })
                                }), (0,
                                o.jsx)(l.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0,
                                    o.jsxs)(c.Z, {
                                        spacing: 1,
                                        children: [(0,
                                        o.jsx)(w.Z, {
                                            htmlFor: "email-code-signup",
                                            children: s("forgot_password.email_code")
                                        }), (0,
                                        o.jsx)(L.Z, {
                                            value: p.email_code,
                                            onChange: function(e) {
                                                f(function(r) {
                                                    return (0,
                                                    g.Z)((0,
                                                    _.Z)({}, r), {
                                                        email_code: e
                                                    })
                                                })
                                            },
                                            numInputs: 6,
                                            containerStyle: {
                                                justifyContent: "space-between"
                                            },
                                            inputProps: {
                                                name: "email_code",
                                                id: "email-code-signup",
                                                onBlur: n
                                            },
                                            inputStyle: {
                                                width: "100%",
                                                margin: "8px",
                                                padding: "10px",
                                                border: "1px solid ".concat("dark" === r.palette.mode ? r.palette.grey[200] : r.palette.grey[300]),
                                                borderRadius: 4,
                                                ":hover": {
                                                    borderColor: r.palette.primary.main
                                                }
                                            },
                                            focusStyle: {
                                                outline: "none",
                                                boxShadow: r.customShadows.primary,
                                                border: "1px solid ".concat(r.palette.primary.main)
                                            }
                                        }), m.email_code && a.email_code && (0,
                                        o.jsx)(j.Z, {
                                            error: !0,
                                            id: "helper-text-email-signup",
                                            children: a.email_code
                                        })]
                                    })
                                }), (0,
                                o.jsxs)(l.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: [(0,
                                    o.jsxs)(c.Z, {
                                        spacing: 1,
                                        children: [(0,
                                        o.jsx)(w.Z, {
                                            htmlFor: "password-signup",
                                            children: s("forgot_password.password")
                                        }), (0,
                                        o.jsx)(b.Z, {
                                            fullWidth: !0,
                                            error: Boolean(m.password && a.password),
                                            id: "password-signup",
                                            type: O ? "text" : "password",
                                            value: p.password,
                                            name: "password",
                                            onBlur: n,
                                            onChange: function(e) {
                                                i(e),
                                                K(e.target.value)
                                            },
                                            autoComplete: "new-password",
                                            endAdornment: (0,
                                            o.jsx)(v.Z, {
                                                position: "end",
                                                children: (0,
                                                o.jsx)(z.Z, {
                                                    "aria-label": "toggle password visibility",
                                                    onClick: T,
                                                    onMouseDown: J,
                                                    edge: "end",
                                                    color: "secondary",
                                                    children: O ? (0,
                                                    o.jsx)(B.Z, {}) : (0,
                                                    o.jsx)(E.Z, {})
                                                })
                                            }),
                                            placeholder: "******",
                                            inputProps: {}
                                        }), m.password && a.password && (0,
                                        o.jsx)(j.Z, {
                                            error: !0,
                                            id: "helper-text-password-signup",
                                            children: a.password
                                        })]
                                    }), (0,
                                    o.jsx)(y.Z, {
                                        fullWidth: !0,
                                        sx: {
                                            mt: 2
                                        },
                                        children: (0,
                                        o.jsxs)(l.ZP, {
                                            container: !0,
                                            spacing: 2,
                                            alignItems: "center",
                                            children: [(0,
                                            o.jsx)(l.ZP, {
                                                item: !0,
                                                children: (0,
                                                o.jsx)(S.Z, {
                                                    sx: {
                                                        bgcolor: null == h ? void 0 : h.color,
                                                        width: 85,
                                                        height: 8,
                                                        borderRadius: "7px"
                                                    }
                                                })
                                            }), (0,
                                            o.jsx)(l.ZP, {
                                                item: !0,
                                                children: (0,
                                                o.jsx)(d.Z, {
                                                    variant: "subtitle1",
                                                    fontSize: "0.75rem",
                                                    children: s("forgot_password.password_strength", {
                                                        context: (0,
                                                        N.Z)(null == h ? void 0 : h.label)
                                                    }).toString()
                                                })
                                            })]
                                        })
                                    })]
                                }), (0,
                                o.jsx)(l.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0,
                                    o.jsxs)(c.Z, {
                                        spacing: 1,
                                        children: [(0,
                                        o.jsx)(w.Z, {
                                            htmlFor: "password-confirm",
                                            children: s("forgot_password.password_confirm")
                                        }), (0,
                                        o.jsx)(b.Z, {
                                            fullWidth: !0,
                                            error: Boolean(m.password_confirm && a.password_confirm),
                                            id: "password-confirm",
                                            type: O ? "text" : "password",
                                            value: p.password_confirm,
                                            name: "password_confirm",
                                            onBlur: n,
                                            onChange: function(e) {
                                                i(e),
                                                K(e.target.value)
                                            },
                                            autoComplete: "new-password",
                                            placeholder: "******",
                                            inputProps: {}
                                        }), m.password_confirm && a.password_confirm && (0,
                                        o.jsx)(j.Z, {
                                            error: !0,
                                            id: "helper-text-password-confirm",
                                            children: a.password_confirm
                                        })]
                                    })
                                }), a.submit && (0,
                                o.jsx)(l.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0,
                                    o.jsx)(j.Z, {
                                        error: !0,
                                        children: a.submit
                                    })
                                }), (0,
                                o.jsx)(l.ZP, {
                                    item: !0,
                                    xs: 12,
                                    children: (0,
                                    o.jsx)(W.Z, {
                                        children: (0,
                                        o.jsx)(k.Z, {
                                            disableElevation: !0,
                                            disabled: u,
                                            fullWidth: !0,
                                            size: "large",
                                            type: "submit",
                                            variant: "contained",
                                            color: "primary",
                                            children: u ? (0,
                                            o.jsx)(P.Z, {
                                                size: 24
                                            }) : s("forgot_password.submit")
                                        })
                                    })
                                })]
                            })
                        })
                    }
                })
            })
        }
          , I = function() {
            (0,
            u.Z)("forgot-password");
            var e = (0,
            n.$G)().t;
            return (0,
            o.jsx)(m.Z, {
                children: (0,
                o.jsx)(p.Z, {
                    children: (0,
                    o.jsx)(h.Z, {
                        children: (0,
                        o.jsxs)(l.ZP, {
                            container: !0,
                            spacing: 3,
                            children: [(0,
                            o.jsx)(l.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0,
                                o.jsxs)(c.Z, {
                                    direction: "row",
                                    justifyContent: "space-between",
                                    alignItems: "baseline",
                                    sx: {
                                        mb: {
                                            xs: -.5,
                                            sm: .5
                                        }
                                    },
                                    children: [(0,
                                    o.jsx)(d.Z, {
                                        variant: "h3",
                                        children: e("forgot_password.title")
                                    }), (0,
                                    o.jsx)(d.Z, {
                                        component: t(),
                                        href: "/login",
                                        variant: "body1",
                                        sx: {
                                            textDecoration: "none"
                                        },
                                        color: "primary",
                                        children: e("forgot_password.back_to_login")
                                    })]
                                })
                            }), (0,
                            o.jsx)(l.ZP, {
                                item: !0,
                                xs: 12,
                                children: (0,
                                o.jsx)(X, {})
                            })]
                        })
                    })
                })
            })
        }
    },
    28222: function(e, r, s) {
        "use strict";
        var o = s(64962)
          , a = s(50726)
          , n = s(96583)
          , i = s(11527)
          , t = s(50959)
          , l = s(97459)
          , c = s(87980)
          , d = s(96086)
          , u = s(57162)
          , m = s(47171)
          , p = s(85819)
          , h = s(38319)
          , f = s(26452)
          , _ = s(76071)
          , g = s(34447)
          , x = s(61104)
          , Z = s(84738)
          , w = function(e) {
            var r, s = e.email, w = (0,
            x.b_)().data, b = (0,
            a.Z)((0,
            x.kh)(), 2), j = b[0], v = b[1].isLoading, y = (0,
            p.Ds)().enqueueSnackbar, S = (0,
            f.$G)().t, k = (0,
            a.Z)(t.useState(!1), 2), P = k[0], C = k[1], q = (0,
            t.useCallback)((r = (0,
            o.Z)(function(e) {
                var r;
                return (0,
                n.__generator)(this, function(o) {
                    switch (o.label) {
                    case 0:
                        if ((0,
                        l.Z)(e))
                            return y(S("auth.captcha.error_null_token"), {
                                variant: "error"
                            }),
                            [2];
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, 4, 5]),
                        [4, j({
                            email: s,
                            recaptcha_data: e
                        }).unwrap()];
                    case 2:
                        return o.sent(),
                        y(S("auth.captcha.success"), {
                            variant: "success"
                        }),
                        (0,
                        _.B)("send_email_verify", {
                            category: "auth",
                            label: "send_email_verify",
                            email: s,
                            success: !0
                        }),
                        [3, 5];
                    case 3:
                        return console.error(r = o.sent()),
                        y(S("auth.captcha.error"), {
                            variant: "error"
                        }),
                        (0,
                        _.B)("send_email_verify", {
                            category: "auth",
                            label: "send_email_verify",
                            email: s,
                            success: !1,
                            error: r
                        }),
                        [3, 5];
                    case 4:
                        return C(!1),
                        [7];
                    case 5:
                        return [2]
                    }
                })
            }),
            function(e) {
                return r.apply(this, arguments)
            }
            ), [s, y, j, S]);
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(c.Z, {
                    position: "end",
                    children: (0,
                    i.jsx)(g.Z, {
                        "aria-label": "send email code",
                        onClick: function() {
                            return C(!0)
                        },
                        edge: "end",
                        color: "secondary",
                        disabled: v,
                        children: (0,
                        i.jsx)(Z.Z, {})
                    })
                }), (0,
                i.jsxs)(d.Z, {
                    open: P,
                    onClose: function() {
                        return C(!1)
                    },
                    children: [(0,
                    i.jsx)(u.Z, {
                        children: S("auth.captcha.title")
                    }), (0,
                    i.jsx)(m.Z, {
                        children: (0,
                        i.jsx)(h.Z, {
                            sitekey: null == w ? void 0 : w.recaptcha_site_key,
                            onChange: q
                        })
                    })]
                })]
            })
        };
        r.Z = function(e) {
            var r = e.email
              , s = (0,
            a.Z)((0,
            x.kh)(), 2)
              , l = s[0]
              , d = s[1].isLoading
              , u = (0,
            x.b_)().data
              , m = (0,
            p.Ds)().enqueueSnackbar
              , h = (0,
            f.$G)().t
              , b = (0,
            t.useCallback)((0,
            o.Z)(function() {
                var e;
                return (0,
                n.__generator)(this, function(s) {
                    switch (s.label) {
                    case 0:
                        console.log("send email code"),
                        s.label = 1;
                    case 1:
                        return s.trys.push([1, 3, , 4]),
                        [4, l({
                            email: r
                        }).unwrap()];
                    case 2:
                        return s.sent(),
                        m(h("auth.captcha.success"), {
                            variant: "success"
                        }),
                        (0,
                        _.B)("send_email_verify", {
                            category: "auth",
                            label: "send_email_verify",
                            email: r,
                            success: !0
                        }),
                        [3, 4];
                    case 3:
                        return console.error(e = s.sent()),
                        m(h("auth.captcha.error"), {
                            variant: "error"
                        }),
                        (0,
                        _.B)("send_email_verify", {
                            category: "auth",
                            label: "send_email_verify",
                            email: r,
                            success: !1,
                            error: e
                        }),
                        [3, 4];
                    case 4:
                        return [2]
                    }
                })
            }), [r, m, l, h]);
            return (null == u ? void 0 : u.is_recaptcha) === 1 ? (0,
            i.jsx)(w, {
                email: r
            }) : (0,
            i.jsx)(c.Z, {
                position: "end",
                children: (0,
                i.jsx)(g.Z, {
                    "aria-label": "send email code",
                    onClick: b,
                    edge: "end",
                    color: "secondary",
                    disabled: d,
                    children: (0,
                    i.jsx)(Z.Z, {})
                })
            })
        }
    },
    76136: function(e, r, s) {
        "use strict";
        s.d(r, {
            V: function() {
                return o
            },
            X: function() {
                return a
            }
        });
        var o = function(e) {
            return e < 2 ? {
                label: "Poor",
                color: "error.main"
            } : e < 3 ? {
                label: "Weak",
                color: "warning.main"
            } : e < 4 ? {
                label: "Normal",
                color: "warning.dark"
            } : e < 5 ? {
                label: "Good",
                color: "success.main"
            } : e < 6 ? {
                label: "Strong",
                color: "success.dark"
            } : {
                label: "Poor",
                color: "error.main"
            }
        }
          , a = function(e) {
            var r = 0;
            return e.length > 5 && (r += 1),
            e.length > 7 && (r += 1),
            RegExp(/[0-9]/).test(e) && (r += 1),
            RegExp(/[!#@$%^&*)(+=._-]/).test(e) && (r += 1),
            RegExp(/[a-z]/).test(e) && RegExp(/[A-Z]/).test(e) && (r += 1),
            r
        }
    }
}, function(e) {
    e.O(0, [5913, 8540, 3269, 4845, 3405, 9779, 8777, 191, 5928, 9580, 9774, 2888, 179], function() {
        return e(e.s = 97475)
    }),
    _N_E = e.O()
}
]);
