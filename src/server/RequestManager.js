const API_URL = 'https://disease.sh/v3/covid-19'

const makeRequest = (item) => {
  const url = `${API_URL}${item.url}`;
  let request = {
    method: item.method,
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // HANDLE METHODS PUT && POST
  const { params } = item;
  if (params){
    if (item.method === "POST" || item.method === "PUT"){
      request.body = JSON.stringify(params);
    }
  }

  // RETURN DATA
  try {
    return fetch(url, request)
      .then((result) => {
        return result.json();
      })
      .catch((err) => {
        return { status: err };
      });
  } catch (error) {
    return { status: error };
  }
};

// GET METHOD
export const GET = (url, key) => makeRequest({ url, method: "GET" });

// POST METHOD
export const POST = (url) => makeRequest({ url, method: "POST" });

// PUT METHOD
export const PUT = (url) => makeRequest({ url, method: "PUT" });

// DELETE METHOD
export const REMOVE = (url) => makeRequest({ url, method: "DELETE" });
