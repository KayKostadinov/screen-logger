

const getMovies = async query => {
    const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`;

    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
              "x-rapidapi-key": "6de197b9e7msh853612e9a51b4aep15b567jsn4bb7ff9d23da",
              "x-rapidapi-host": "imdb8.p.rapidapi.com",
              "useQueryString": "true"
            },
          });

        const data = await res.json();
        return data.d; 
        
    } catch (err) {
        console.log(err.message);
    }

};

export default getMovies;