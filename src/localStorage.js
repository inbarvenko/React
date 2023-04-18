export const getItemFromLocalStorage = (item, valueDefault) => {
  try {
    const source = localStorage.getItem(item);
    if (source) {
      return JSON.parse(source);
    }

    return valueDefault;
  }
  catch (error) {
    return valueDefault;
  }
}

export const setItemToLocalStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
}
