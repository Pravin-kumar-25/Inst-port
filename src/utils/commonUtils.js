import { instance } from "./axios"
import nookies from 'nookies'

export const signUp = async (data) => {
    try {
        const response = await instance.post('/public/signup', data)
        if(response.data.result) {
            
        }
        const token = response.data.data.token
        const userData = response.data.data
        nookies.set(null,'token', token, {})
        nookies.set(null,'user',JSON.stringify(userData))
        return userData;
    } catch (error) {
        console.log(error.response)
        return error.response;
    }
}

export const signIn = async (data) => {
    try {
        const response = await instance.post('/public/login', data)
        console.log(response)
        return response.data;
    } catch (error) {
        console.log(error.response)
        return error.response;
    }
}

export const logOut = async (data) => {
    nookies.destroy(null,'token');
    nookies.destroy(null,'user')
}

export const checkUser = async (ctx) => {
    const { token, user } = nookies.get(ctx)
    console.log(user,'inside check');

    if (!user) {
        return {
            props: {}
        }
    }

    return {
        props: {
            user: JSON.parse(user)
        }
    }
}