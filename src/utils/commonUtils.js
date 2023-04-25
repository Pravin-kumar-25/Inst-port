import { instance } from "./axios"

export const signUp = async (data) => {
    try {
        const response = await instance.post('/public/signup', data)
        console.log(response);
        return response;
    } catch (error) {
        console.log("error")
        console.log(error.response)
        return error;
    }
}

export const signIn = async (data) => {
    try {
        const response = await instance.post('/public/login', data)
        console.log(response)
        return response;
    } catch (error) {
        console.log("error");
        console.log(error)
        return error;
    }
}