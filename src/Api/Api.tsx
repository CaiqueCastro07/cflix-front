import axios from "axios";

//const encoder = new TextEncoder()

class ApiController {

    api: any;

    constructor() {
        this.api = axios.create({
            baseURL: "http://localhost:3003/", headers: {
                Authorization: "Bearer chave777"
            }
        })
    }

    async getFilmsApi(page: number, limit: number): Promise<any> {

        try {

            const response = await this.api.get(`films?page=${page}&limit=${limit}`)

            if (response?.status != 200) {
                return false;
            }
            console.log("The server returned:", Array.isArray(response?.data?.data) ? "array" : typeof response?.data?.data)
            return response?.data?.data

        } catch (err) {
            console.log("##getFilmsApi()", err)
            return false
        }

    }

    async refreshMoviesApi(): Promise<any> {

        try {

            const response = await this.api.get("refresh")

            if (response?.status != 200) {
                return false;
            }

            return true

        } catch (err) {
            console.log("##refreshMoviesApi()", err)
            return false
        }

    }

}


export {
    ApiController
}