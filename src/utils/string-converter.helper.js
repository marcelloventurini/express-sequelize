module.exports = (objParams) => {
  for (let property in objParams) {
    if (/Id|id/.test(property)) {
      objParams[property] = Number(objParams[property]);
    }
  }

  return objParams;
};
