import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// third-party
import { Provider as ReduxProvider } from "react-redux";
import "react-app-polyfill/ie11";
import "core-js/stable";

// apex-chart
import "@/assets/third-party/apex-chart.css";
import "@/assets/third-party/react-table.css";

// resize observer
import ResizeObserver from "resize-observer-polyfill";

// project import
import App from "@/App";
import store from "@/store";
import { ConfigProvider } from "@/contexts/ConfigContext";
import "@/analytics";

import "@fontsource/roboto";
import "simplebar-react/dist/simplebar.min.css";

// 导入自定义函数
import { handleMobileClick } from "@/custom"; // 确保路径正确

// hash router change to browser router
if (window.location.hash) {
  window.location.href = window.location.hash;
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("root element not found");
}

const root = createRoot(container!);

const ro = new ResizeObserver((entries, observer) =>
  entries.forEach((entry) => {
    const { width, height } = entry.contentRect;

    // if (import.meta.env.DEV) {
    //   console.log("Element:", entry.target);
    //   console.log(`Element's size: ${width}px x ${height}px`);
    //   console.log(`Element's paddings: ${top}px ${right}px ${bottom}px ${left}px`);
    // }

    document.documentElement.style.setProperty("--width", `${width}px`);
    document.documentElement.style.setProperty("--height", `${height}px`);

    observer.observe(entry.target);
  })
);

ro.observe(container);

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <ReduxProvider store={store}>
    <ConfigProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </ReduxProvider>
);

// 运行自定义代码
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.treeview-menu li a');
  links.forEach(link => {
    link.addEventListener('click', handleMobileClick);
  });
});
