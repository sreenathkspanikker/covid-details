// SET VALUES
export const SET_VALUES = (key, data) => {
  sessionStorage.removeItem(key);
  const values = JSON.stringify(data);
  sessionStorage.setItem(key, values);
};

// GET VALUES
export const GET_VALUES = (key) => JSON.parse(sessionStorage.getItem(key));

// REMOVE VALUES
export const REMOVE_VALUES = (key) => sessionStorage.removeItem(key);
