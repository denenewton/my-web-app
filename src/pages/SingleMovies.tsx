import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect, Key} from "react";
import { MovieObj } from '../contex/SearchContext';


const SingleMovies = () => {
  const params = useParams();
  const [movie, setMovie] = useState<MovieObj>();
  const [loading, setLoading] = useState(true);

  async function populateMoviesData(id:any) {
    setLoading(true)
    const response = await fetch('http://localhost:5173/src/pages/movies-data.json');
    const data = await response.json();
    const movie: MovieObj = data.find((m: { _id: string }) => m._id == id);
    
    setMovie(movie);
    setLoading(false);
  }

  useEffect(() => {
    populateMoviesData(params?.id_movie);
  }, [params.id]);

  const _movie = movie;
  //const id_movie = movie?.id;

  if (loading) {
    return(
      <div className="w-full h-screen flex items-center justify-center">
        <h5 className="text-center">Loading...</h5>
      </div>
    )
  }
  return (
    <>
      <div className="backdrop-blur-[1px] bg-white/70 text-slate-700 w-full h-full max-w-[1024px] min-h-[700px] mx-auto top-[1rem] rounded-xl relative mt-0 mt-[-3rem] sm:mt-0 py-10 px-4 sm:px-5">
        <div className="flex flex-col items-center justify-center max-w-[700px]  mx-auto">
          <h1 className="text-4xl text-slate-700">
            <Link to={`${_movie?.url_movie}`} target="_blank">
              {_movie?.title} <span>({_movie?.release_date?.split("-")[0]})</span>
            </Link>
          </h1>
          <p className="tracking-wide flex itmes-center gap-4">
            {_movie?.release_date?.split("-").join("/")}
            <span className="justify-self-auto ">&bull;</span>
            <span className="flex gap-0">{_movie?.genres?.map((el: { id: Key ,name: string  }) => (
             <span key={el.id}> {el.name} &nbsp; </span>  
            ))} </span>
          </p>
        </div>
        <div className="max-w-[848px] mx-auto">
          <h2 className="text-center text-2xl leading-10 mt-3">Sinopse</h2>
          <p className="text-justify">{_movie?.description}</p>
        </div>
        <div className="w-full h-[300px] mt-10">
          <h2 className="text-center text-2xl leading-10 mb-2">Casts</h2>
          <div className="w-full h-full flex gap-2  overflow-x-auto">
            {_movie?.casts?.map((cast: any) => (
              <div
                key={`${cast?.name}${Math.random() * 1000}`}
                className="flex-none w-36 h-48 rounded-lg shadow-lg"
              >
                <img
                  src={cast?.profile_path}
                  alt={cast?.name}
                  className="w-full h-full object-cover rounded-lg"
                />

                <div className="px-2 py-4">
                  <Link to={`/person/${cast?.id}${_movie?.backdrop_path?.split("original")[1]}`}>
                    <p className="font-simibold text-md  hover:text-gray-500 font-medium">
                      {cast?.name}
                    </p>
                    <span className="text-xs leading-none font-light mt-[-1px]">
                      {cast?.character}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovies
