import React, { Key, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface Genre {
  id: Key;
  name: string;
}

export interface MovieObj {
  _id?: string;
  id: string;
  title: string;
  url_image: string;
  url_movie?: string;
  backdrop_path?: string;
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

export interface Actors{
  _id: number,
  adult: boolean,
  name: string;
  biography: string;
  also_known_as: [],
  birthday: string;
  deathday: string;
  popularity: number;
  homepage: string;
  imdb_id: string;
  known_for_department:string;
  place_of_birth: string;
  gender: number;
  profile_path:string;
}
