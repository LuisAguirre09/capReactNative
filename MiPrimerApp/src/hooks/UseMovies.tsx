import React, { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { MovieDBResponse, Movies } from '../interfaces/MovieDBInterface';

interface MovieState {
    nowPlaying: Movies[],
    popular:    Movies[],
    topRated:   Movies[],
    upcoming:   Movies[],
}

export const UseMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [ movieState , setMovieState ] = useState<MovieState>({
        nowPlaying: [],
        popular:    [],
        topRated:   [],
        upcoming:   [],
    });

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBResponse>('/now_playing');
        const popularPromise    = movieDB.get<MovieDBResponse>('/popular');
        const topRatedPromise   = movieDB.get<MovieDBResponse>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDBResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMovieState({
            nowPlaying: response[0].data.results,
            popular:    response[1].data.results,
            topRated:   response[2].data.results,
            upcoming:   response[3].data.results,
        })

        setIsLoading(false);
    }

    useEffect(() => {
        //now_playing
        getMovies();
        
    }, [])

    return { 
        ...movieState,
        isLoading
     };
}
