import React, { useEffect, useState } from 'react'
import movieDB from '../api/MovieDB';
import { CreditsResponse, Cast } from '../interfaces/CreditsInterface';
import { MovieFull } from '../interfaces/MovieDBInterface';

interface MovieDetail {
    isLoading: boolean,
    cast: Cast[],
    movieFull?: MovieFull,
}

export const UseMovieDetails = ( movieID : number ) => {

    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState<MovieDetail>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetail = async () => {

        const detailPromise = await movieDB.get<MovieFull>(`/${ movieID }`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${ movieID }/credits`);

        const [ movieDetailRes, movieCastResp ] = await Promise.all([ detailPromise, castPromise ]);

        setState({
            isLoading: false,
            movieFull: movieDetailRes.data,
            cast: movieCastResp.data.cast,
        });

    }

    useEffect(() => {

       getMovieDetail();

    }, [])

    return (
        state
    )
}
