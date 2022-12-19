type RequestDataTypes = {
  config: RequestInit;
  url: string;
};

const API_URL = import.meta.env.VITE_APP_API_URL;

const ApiService = {
  customRequest: async (requestData: RequestDataTypes) => {
    const res = await fetch(API_URL + requestData.url, requestData.config);
    const resData = await res.json();
    return resData;
  },
};

export default ApiService;
