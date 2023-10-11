import { API_URL } from "./utils/constants";

export const getRequest = async (url: String, v?: String) => {
  let response = await fetch(`${API_URL}${url}`);
  if (response?.status === 200) {
    console.log(response);
    return response.json();
  }
};
