import axios from "axios";

export const sendRewardToTeacher = async (url: string, data: any, token: string): Promise<any> => {
  try {
    const response: any = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response, "RESPONSE")
    return response
  } catch (error: any) {
    return console.log(error);
  }
}