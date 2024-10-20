import React, { Key, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface Genre {
  id: Key;
  name: string;
}

export interface MovieObj {
  _id: string;
  title: string;
  url_image: string;
  url_movie?: string;
  backdrop_path: string;
  genres?: Genre[];
  release_date?: string;
  description?: string;
  casts?: any;
}

export interface Value {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  searchGenre: string;
  setSearchGenre: React.Dispatch<React.SetStateAction<string>>;
  movies: MovieObj[];
}
