import axios from "axios";

export const sendRewardToTeacher = async (url: string, data: any, token: string): Promise<any> => {
  try {
    const response: any = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response;
  } catch (error: any) {
    return console.log(error);
  }
}

export const getNotification = async (url: string, token: string): Promise<any> => {
  try {
    const response: any = await axios.get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    
    return response;
  } catch (error: any) {
    return console.log(error);
  }
}