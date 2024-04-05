export interface Data {
    users: User[];
    favorites: Favorite[];
    genres: Genre[];
    'movies-popular': Moviespopular[];
    'movies-toprated': Moviespopular[];
}

export interface Moviespopular {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Favorite {
    userId: number;
    movieId: number;
    id: number;
}

export interface User {
    email: string;
    password: string;
    name: string;
    id: number;
}
