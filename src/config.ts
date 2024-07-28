// types
import { DefaultConfigProps } from "@/types/config";

export const drawerWidth = 260;

// ==============================|| THEME CONFIG  ||============================== //

const getGA = () => {
  if (import.meta.env.DEV) {
    return "";
  }

  switch (window.location.hostname) {
    case "abc.gfwnetwork.com":
      return "G-HSJEER5NF4";
    case "beta.v2b.rip":
      return "G-D6GDYEWSQT";
    default:
      return "";
  }
};

const config: DefaultConfigProps = {
  defaultPath: "/",
  fontFamily: `'Public Sans', sans-serif`,
  miniDrawer: false,
  container: true,
  themeDirection: "ltr",
  title: "明日边界",
  title_split: " - ",
  background_url: "https://unsplash.com/random",
  description: "天下武功 唯快不破",
  logo: "https://i.loli.wiki/public/240728/ansible-svgrepo-com.png",
  api: "https://www.011409.xyz",
  languages: ["zh-CN", "en-US"],
  googleAnalytics: {
    measurementId: getGA()
  },
  emojiEndpoint: "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/{{code}}.png",
  startYear: 2019
};

export default config;
