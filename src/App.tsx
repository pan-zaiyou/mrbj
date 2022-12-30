import React from "react";

// third-party
import { I18nextProvider } from "react-i18next";
import { SnackbarProvider } from "notistack";
import { CacheProvider } from "@emotion/react";

// project import
import Routes from "@/routes";
import ThemeCustomization from "@/themes";
// import RTLLayout from '@/components/RTLLayout';
import ScrollTop from "@/components/ScrollTop";
import cache from "@/themes/cache";
import i18n from "@/i18n";

// middlewares
import AccountStateDetector from "@/middleware/view/accountStateDetector";
import TitleSelector from "@/middleware/view/titleSelector";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <CacheProvider value={cache}>
    <ThemeCustomization>
      {/* <RTLLayout> */}
      <I18nextProvider i18n={i18n}>
        <ScrollTop>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
            autoHideDuration={4000}
            dense
          >
            {/* BEGIN Middlewares */}
            <TitleSelector />
            <AccountStateDetector />
            {/* END Middlewares */}

            <Routes />
          </SnackbarProvider>
        </ScrollTop>
      </I18nextProvider>
      {/* </RTLLayout> */}
    </ThemeCustomization>
  </CacheProvider>
);

export default App;