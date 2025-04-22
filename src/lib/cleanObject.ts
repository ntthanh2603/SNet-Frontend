function cleanObject(obj) {
  const result: any = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] !== "" && obj[key] !== undefined) {
      result[key] = obj[key];
    }
  });
  return result;
}

export default cleanObject;
