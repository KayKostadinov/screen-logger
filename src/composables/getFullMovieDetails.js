import { ref } from "@vue/reactivity";

const movieDetails = ref(null);

const getFullMovieDetails = async id => {
    if (!id) return;

    const url = `https://api.themoviedb.org/3/movie/${id}`;

    try {

        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTNmOGFmNzg4Njc4M2E2Yjc5MDNhZTRjM2JmNDBmNyIsInN1YiI6IjYwZGVlOTVhZWY5ZDcyMDAyZDk2Y2Y5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LF-k9mSUmoTDkK8pe44B7SoZnJBEsRvkTLICHqittWU",
                "Content-Type": "application/json",
            }
        })

        movieDetails.value = await res.json();
        return movieDetails.value;

    } catch (error) {
        console.log(error.message)
    }
}

export default getFullMovieDetails;