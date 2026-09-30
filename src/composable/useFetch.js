import axios from "axios";
import { ref } from 'vue'

export function useFetch(endpoint){
    const data = ref(null)
    const error = ref(null)
    const isLoading = ref(false)

    const baseURL = import.meta.env.VITE_API_BASE_URL

    const fetchData = async () => {
        isLoading.value = true
        error.value = null

        try {
            const rsp = await axios.get(baseURL+endpoint)
            data.value = rsp.data.data
        } catch (err) {
            error.value = err.message
        } finally {
            isLoading.value = false
        }
    }

    return {
        data,
        error,
        isLoading,
        fetchData
    }
}