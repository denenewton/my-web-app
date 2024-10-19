
import { createContext, useState ,useEffect, ReactNode, Key} from "react";

interface Props { children: ReactNode; }

interface Genre { id: Key; name: string ; };

export interface MovieObj {
  _id:string;
  title:string;
  url_image:string;
  url_movie?: string;
  backdrop_path:string;
  genres?: Genre[];
  release_date?: string;
  description?: string;
  casts?:any;
}

const SearchContext:any = createContext({
  searchText:"",
  setSearchText:(_arg: string) => {},
  searchGenre:"",
  setSearchGenre: (_arg: string) => {},
  movies: []
});


export function SearchProvider({ children }:Props) {
  const [searchText, setSearchText] = useState("");
  const [searchGenre, setSearchGenre] = useState("");
  const [movies, setMovies] = useState<MovieObj[]>([]);

  async function getMovies() {
    const response = await fetch('http://localhost:5173/src/pages/movies-data.json');
    const data: MovieObj[] = await response.json();
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


export interface Value {
  searchText: string;
  setSearchText: React. Dispatch<React. SetStateAction<string>>;
  searchGenre: string;
  setSearchGenre: React. Dispatch<React. SetStateAction<string>>;
  movies: MovieObj[]
}