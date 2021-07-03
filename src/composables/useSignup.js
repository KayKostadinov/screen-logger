import { ref } from "@vue/reactivity"
import { projectAuth } from "../firebase/config"


const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, name) => {
    error.value = null
    isPending.value = true

    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if (!res) throw new Error('Could not complete signup.')

        res.user.updateProfile({displayName: name})
        error.value = null

        return res
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    }
    isPending.value = false
    
}

const useSignup = () => {
    return {error, signup, isPending}
}

export default useSignup