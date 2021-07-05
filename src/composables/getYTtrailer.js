import { ref } from "@vue/reactivity";

const trailerLink = ref(null);
let quotaReached = false;

const getTrailer = async (movieTitle) => {
    if (!movieTitle) return;

    const sanitizeTitle = movieTitle.replace(/[^a-zA-Z ]/g, "");
    const fallbackSearch = sanitizeTitle.split(' ').join('+');
    const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA2eft58muNTxJTsdYU4S6nodGTdfZ5l_o&q=${sanitizeTitle} trailer&type=video&videoDuration=short&part=snippet`
    const ytUrl = `https://www.youtube.com/watch?v=`;
    const fallback = `https://www.youtube.com/results?search_query=${fallbackSearch}+trailer`;

    try {
        if (quotaReached) {
            trailerLink.value = fallback;
            return trailerLink.value;
        }
        const res = await fetch(url, {
            method: 'GET',
        })

        const parse = await res.json();

        if (parse.error.code == 403) {
            quotaReached = true;
            trailerLink.value = fallback;
            return trailerLink.value;
        }

        const videoId = parse?.items[0]?.id.videoId
        trailerLink.value = ytUrl + videoId;

        return trailerLink.value;

    } catch (error) {
        console.log(error.message)
    }
}

export default getTrailer;