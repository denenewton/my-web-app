import { createContext, useState ,useEffect } from "react";
import { MovieObj, Props, Value } from '../interfaces/interfaces';
import movieData from '../data/movies-data.json'

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
    //const response = await fetch('./movies-data.json');
    //await response.json();
    const data: MovieObj[] = Object.create(movieData);
    setMovies(data);
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

