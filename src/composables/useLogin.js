import { ref } from "@vue/reactivity"
import { projectAuth } from "../firebase/config"


const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    error.value = null
    isPending.value = true

    try {
        const res = await projectAuth.signInWithEmailAndPassword(email, password)

        if (!res) throw new Error('Could not login.')
        console.log(res)
        error.value = null
        isPending.value = false

        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false

    }
}

const useLogin = () => {
    return {error, login, isPending}
}

export default useLogin