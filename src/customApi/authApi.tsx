import axios from 'axios';

export const teacherRegister = async (url: string, data: any): Promise<any> => {
  try {
    const res = await axios.post(url, data);
    return res
  } catch (error: any) {
    return console.log(error)
  }
};

export const teacherSignin = async (url: any, data: any): Promise<any> => {
  try {
    const res = await axios.post(url, data);
    return res
  } catch (error: any) {
    return console.log(error);
  }
};

export const studentRegister = async (url: string, data: any): Promise<any> => {
  try {
    const res = await axios.post(url, data);
    return res
  } catch (error: any) {
    return console.log(error)
  }
};

export const studentSignin = async (url: any, data: any): Promise<any> => {
  try {
    const res = await axios.post(url, data);
    return res
  } catch (error: any) {
    return console.log(error);
  }
};
