import axios from 'axios';

const getMoviePopular = async () => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASEURL}/movie/popular?page=1&apikey=${process.env.REACT_APP_APIKEY}`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODViZjcyZjcyNWZjMmE2Y2FjMzdmMGNmYjg3NmRhMCIsInN1YiI6IjY1ZDFmNzljZjk0NzViMDE2M2RhNjhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZV2Xcl7EPjkzQ_5hjJ6H3Q2gCc_FstbPOXV71CsXoI',
    },
  };

  try {
    const response = await axios.request(options);
    const results = response.data.results;
    return results;
    // console.log(results);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const searchMovie = async(q) => {
  const options = {
    method: 'GET',
    url: `${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&page=1&include_adult=false&apikey=${process.env.REACT_APP_APIKEY}`,
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODViZjcyZjcyNWZjMmE2Y2FjMzdmMGNmYjg3NmRhMCIsInN1YiI6IjY1ZDFmNzljZjk0NzViMDE2M2RhNjhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZV2Xcl7EPjkzQ_5hjJ6H3Q2gCc_FstbPOXV71CsXoI',
    },
  };

  const response = await axios.request(options);
  const results = response.data;
  return results;
//   console.log(results);
};

// const getTopRated = () => {
//     const options = {
//       method: 'GET',
//       url: `${process.env.REACT_APP_BASEURL}/movie/top_rated?apikey=${process.env.REACT_APP_APIKEY}`
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODViZjcyZjcyNWZjMmE2Y2FjMzdmMGNmYjg3NmRhMCIsInN1YiI6IjY1ZDFmNzljZjk0NzViMDE2M2RhNjhhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kZV2Xcl7EPjkzQ_5hjJ6H3Q2gCc_FstbPOXV71CsXoI',
//       },
//     };
// }
export { getMoviePopular, searchMovie };
