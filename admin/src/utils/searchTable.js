export const filterEmployee = (array, string, setData) => {
  setData(array);

  const results = [];

  array.forEach((obj) => {
    if (obj["name"].toLowerCase().includes(string.toLowerCase())) {
      results.push(obj);

      setData(results);
    } else {
      setData([]);

      return [];
    }
  });
};
