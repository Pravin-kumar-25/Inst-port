import axios from "axios"
import { basePath } from "next.config"

export const signUp =async (data) => {
    console.log(basePath)
    axios.get(basePath)
}