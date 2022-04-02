const environment = "development";

let api;
let oriedu;
let auth;

if (environment === "development") {
  api = "http://localhost:4000/api/v1";
  oriedu = "http://localhost:3002";
  auth = "http://auth.orianderson.com/api/v1";
} else {
  api = "https://api.tiadidi.com.br/api/v1";
  oriedu = "https://www.tiadidi.com.br";
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
  jwt: {
    secret: process.env.REACT_APP_SECRET_KEY,
    timeout: "1 days",
  },
  oriedu: oriedu,
  api: api,
  auth: auth,
};

export default config;
