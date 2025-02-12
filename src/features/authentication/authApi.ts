import api from "../../app/api"
import AuthEndpoint from "./authEndpoints"

const authApi = {
  async loginAdmin(email: string, password: string): Promise<string> {
    const response = await api.post(AuthEndpoint.loginAdmin, {
      email,
      password,
    })
    console.log("login admin authApi", response)
    return response.data.message
  },
}

export default authApi
