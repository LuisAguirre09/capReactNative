import React, { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { MovieDBNowPlayingInterface, Movies } from '../interfaces/MovieDBInterface';

export const UseMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movies[]>([]);

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlayingInterface>('/now_playing');
        setPeliculasEnCine( resp.data.results );

        setIsLoading(false);
    }

    useEffect(() => {
        //now_playing
        getMovies();
        
    }, [])

    return { 
        peliculasEnCine,
        isLoading
     };
}
