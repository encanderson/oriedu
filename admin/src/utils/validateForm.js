export const filterPayload = (payload, fields) => {
  const obj = {};

  fields.forEach((key) => {
    if (payload[key]) {
      obj[key] = payload[key];
    } else {
      return false;
    }
  });

  return obj;
};

export const validateForm = (payload, fields) => {
  if (payload) {
    Object.keys(payload).map((item) => {
      if (fields.indexOf(item) === -1) {
        console.log(item);
        return false;
      }

      return payload;
    });
  }

  return true;
};