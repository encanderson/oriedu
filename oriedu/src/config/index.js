const environment = "development";

let home;
let api;
let auth;

if (environment === "development") {
  home = "/";
  api = "http://localhost:4000/api/v1";
  auth = "http://localhost:6000/api/v1";
} else {
  home = "/";
  api = "https://api.tiadidi.com.br/api/v1";
  auth = "https://auth.tiadidi.com.br/api/v1";
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
};

export default config;
