import axios from "axios";

//const encoder = new TextEncoder()

class ApiController {

    api: any;

    constructor() {
        this.api = axios.create({
            baseURL: "https://portfoliocaique.click/cflix/", headers: {
                Authorization: "Bearer chave777"
            }
        })
    }

    async getFilmsApi(page: number, limit: number): Promise<any[] | false> {

        try {

            const response = await this.api.get(`films?page=${page}&limit=${limit}`)

            if (response?.status != 200) {
                console.log(response?.data?.message || "Erro desconhecido")
                return false;
            }
            console.log("The server returned:", Array.isArray(response?.data?.data) ? "array" : typeof response?.data?.data)
            return response?.data?.data

        } catch (err) {
            //@ts-ignore
            console.log("##getFilmsApi()", err.message || err.msg || err)
            return false
        }

    }

    async refreshMoviesApi(): Promise<boolean> {

        try {

            const response = await this.api.get("refresh")

            if(response?.status != 200) {
                console.log(response?.data?.message || "Erro desconhecido")
                return false
            }
            console.log("Mensagem de sucesso",response?.data?.message)
            return true

        } catch (err) {
             //@ts-ignore
            console.log("##refreshMoviesApi()", err.message || err.msg || err)
            return false
        }

    }

}


export {
    ApiController
}