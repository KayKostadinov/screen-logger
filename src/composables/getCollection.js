import { ref, watchEffect } from "vue"
import {projectFirestore} from '../firebase/config'


const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore
        .collection(collection)
        .orderBy('timestamp')

    const unsub = collectionRef.onSnapshot(snap => {
        console.log('snapshot')
        let res = []
        snap.docs.forEach(doc => {
            doc.data().timestamp && res.push({ ...doc.data(), id: doc.id, })
        })

        documents.value = res
        error.value = null
    }, err => {
        documents.value = null
        console.log(err.message)
        error.value = "Couldn't fetch data"
    })

    watchEffect(onInvalidate => {
        onInvalidate(() => unsub())
    })

    return {documents, error}
}

export default getCollection