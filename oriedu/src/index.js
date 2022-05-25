import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import App from "@src/App";
import reducer from "@src/store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6Lef6BkgAAAAAIIlAzu6IzER1E13qfM3o1puHXvT"
    language="pt-br"
    scriptProps={{
      async: false,
      defer: false,
      appendTo: "head",
      nonce: undefined,
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    ,
  </GoogleReCaptchaProvider>,
  document.getElementById("root")
);
