const environment = "development";

let home;
let api;
let auth;
let protocol;
let app;

if (environment === "development") {
  app = "orianderson.com:3000";
  home = "/";
  api = "http://orianderson.com:4000/api/v1";
  auth = "http://auth.orianderson.com/api/v1";
  protocol = "http://";
} else {
  app = "tiadidi.com.br";
  home = "/";
  api = "https://api.tiadidi.com.br/api/v1";
  auth = "https://auth.tiadidi.com.br/api/v1";
  protocol = "https://";
}

const config = {
  basename: "",
  defaultPath: "/dashboard",
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  outlinedFilled: true,
  theme: "light",
  i18n: "pt",
  rtlLayout: false,
  home: home,
  api: api,
  auth: auth,
  protocol: protocol,
  app: app,
  orisistem: "https://orisistem.com",
};

export default config;
