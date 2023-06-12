import axios from "axios";

export const listAllTeachers = async (url: string, token: string): Promise<any> => {
  try {
    const response: any = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response
  } catch (error: any) {
    return console.log(error);
  }
}

export const listProfile = async (url: string, token: string): Promise<any> => {
  try {
    const response: any = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response
  } catch (error: any) {
    return console.log(error);
  }
}