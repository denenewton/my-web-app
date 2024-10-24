import { createContext, useState ,useEffect } from "react";
import { MovieObj, Props, Value } from '../interfaces/interfaces';
import { Axios } from "../utils/cliente";

const defaultValue = {
  searchText:"",
  setSearchText:(_arg: string) => {},
  searchGenre:"",
  setSearchGenre: (_arg: string) => {},
  movies: [],
}

const SearchContext:any = createContext(defaultValue);


export function SearchProvider({ children }:Props) {
  const [searchText, setSearchText] = useState("");
  const [searchGenre, setSearchGenre] = useState("");
  const [movies, setMovies] = useState<MovieObj[]>([]);

  async function getMovies() {
    const response = await fetch('https://app-graphql.vercel.app/api/graphql?query=query+MyQuery+%7B%0A++movies+%7B%0A++++...+on+Movie+%7B%0A++++++id%0A++++++title%0A++++++release_date%0A++++++popularity%0A++++++director%0A++++++vote_average%0A++++++description%0A++++++url_image%0A++++++url_movie%0A++++++genres+%7B%0A++++++++id%0A++++++++name%0A++++++%7D%0A++++++_id%0A++++%7D%0A++++...+on+Error+%7B%0A++++++errors%0A++++%7D%0A++%7D%0A%7D');
    const data: Object = await response.json(); //Object.create(movieData);
   // console.log(data.data.movies)
    setMovies(data?.data?.movies);
  }

  useEffect(() => {
    (async () => await getMovies())()
  }, [])


  const value: Value  = {
    searchText,
    setSearchText,
    searchGenre,
    setSearchGenre,
    movies,
  };


  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export default SearchContext;

