import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");

export const createdAt = () => {
  return moment().format();
};

export const convertToDate = (date) => {
  return moment(date, "DD-MM-YYYY").toDate();
};

export const formatDate = (datetime) => {
  if (datetime) {
    return moment(datetime).format("DD-MM-YYYY");
  }
};
