const environment = "developmen";

let baseUrl;
let home;

if (environment === "development") {
  baseUrl = "http://localhost:4000/api/v1";
  home = "/";
} else {
  baseUrl = "https://api.orisistem.com/api/v1";
  home = "/";
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
  baseUrl: baseUrl,
};

export default config;
