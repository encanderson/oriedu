const environment = "development";

let orisistem;
let baseUrl;
let orihome;
let orihomeApp;

if (environment === "development") {
  orisistem = "http://orianderson.com";
  baseUrl = "http://localhost:4000/api/v1";
  orihome = "http://localhost:3002/sign";
  orihomeApp = "orianderson.com:3002";
} else {
  orisistem = "https://orisistem.com";
  baseUrl = "https://api.orisistem.com/api/v1";
  orihome = "https://orihome.com.br";
  orihomeApp = "orihome.com.br";
}

const config = {
  basename: "",
  defaultPath: "/dashboard",
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  outlinedFilled: true,
  theme: "dark",
  i18n: "pt",
  rtlLayout: false,
  jwt: {
    secret: process.env.REACT_APP_SECRET_KEY,
    timeout: "1 days",
  },
  orisistem: orisistem,
  orihome: orihome,
  orihomeApp: orihomeApp,
  baseUrl: baseUrl,
};

export default config;
