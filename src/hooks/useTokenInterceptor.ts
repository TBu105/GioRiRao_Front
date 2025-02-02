import { useEffect } from "react"
import { useAppSelector } from "../app/hooks"
import { selectAccessToken } from "../features/authentication/authSlice"
import api from "../app/api"

const useTokenInterceptor = () => {
  const token = useAppSelector(selectAccessToken)

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      config => {
        if (token) {
          config.headers.Authorization = `Beaere ${token}`
        }
        return config
      },
      error => Promise.reject(error),
    )

    return () => {
      api.interceptors.request.eject(requestInterceptor)
    }
  }, [token])
}

export default useTokenInterceptor
