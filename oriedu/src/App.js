import { useSelector } from "react-redux";

import {
  StyledEngineProvider,
  CssBaseline,
  Link,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import CookieConsent from "react-cookie-consent";

import theme from "@src/themes";

import Locales from "@src/components/Locales";
import NavigationScroll from "@src/layout/NavigationScroll";
import Snackbar from "@src/components/extended/Snackbar";

import { AppProvider } from "@src/contexts";

import config from "./config";

import AppRoutes from "@src/routes";

const App = () => {
  const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline>
          <Locales>
            <NavigationScroll>
              <AppProvider>
                <AppRoutes />
                <CookieConsent
                  location="bottom"
                  buttonText="Entendi"
                  cookieName="oriedu-cookie"
                  style={{ background: "#2B373B" }}
                  buttonStyle={{
                    color: "black",
                    fontSize: "16px",
                    backgroundColor: "#1e88e5",
                  }}
                  expires={150}
                  declineButtonText={"Recusar"}
                  enableDeclineButton
                  declineButtonStyle={{ backgroundColor: "#5e35b1" }}
                >
                  Este site usa cookies funcionais apenas para melhorar sua
                  experiência.{" "}
                  <span style={{ fontSize: "10px" }}>
                    <Button
                      color="primary"
                      component={Link}
                      href={`${config.orisistem}/politica-de-privacidade`}
                      target="_blank"
                    >
                      Política de Privacidade
                    </Button>
                  </span>
                </CookieConsent>
                <Snackbar />
              </AppProvider>
            </NavigationScroll>
          </Locales>
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
