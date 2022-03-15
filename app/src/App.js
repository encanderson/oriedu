import { useSelector } from "react-redux";

import { StyledEngineProvider, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "@src/themes";

import Locales from "@src/components/Locales";
import NavigationScroll from "@src/layout/NavigationScroll";
import { AuthProvider } from "@src/contexts";
import Snackbar from "@src/components/extended/Snackbar";

import AppRoutes from "@src/routes";

const App = () => {
  const customization = useSelector((state) => state.customization);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline>
          <Locales>
            <NavigationScroll>
              <AuthProvider>
                <AppRoutes />
                <Snackbar />
              </AuthProvider>
            </NavigationScroll>
          </Locales>
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
