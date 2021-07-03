
const getSearchResult = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTNmOGFmNzg4Njc4M2E2Yjc5MDNhZTRjM2JmNDBmNyIsInN1YiI6IjYwZGVlOTVhZWY5ZDcyMDAyZDk2Y2Y5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LF-k9mSUmoTDkK8pe44B7SoZnJBEsRvkTLICHqittWU",
        "Content-Type": "application/json",
      },
    });

    const movies = await res.json();
    return movies.results;

  } catch (err) {
    console.log(err.message);
  }

};

export default getSearchResult;