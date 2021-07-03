import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
    const error = ref(null)
    const isPending = ref(false)

    const addDoc = async doc => {
        error.value = null
        isPending.value = true

        try {
            await projectFirestore.collection(collection).add(doc)

        } catch (err) {
            console.log(err.message)
            error.value = err.message
        }
        isPending.value = true

    }

    return {error, addDoc, isPending}
}

export default useCollection