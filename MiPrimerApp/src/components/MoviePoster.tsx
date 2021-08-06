import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import { Image, View } from 'react-native'
import { Movies } from '../interfaces/MovieDBInterface'

interface Props {
    movie: Movies;
    height?: number,
    width?: number,
}

export const MoviePoster = ( {movie, height = 420, width = 300}: Props ) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

    const navigation: any = useNavigation();

    return (
        <TouchableOpacity 
            onPress={ () => navigation.navigate('DetailScreen', movie) }
            activeOpacity={ 0.7 }
            style={{
                width,
                height,
                marginHorizontal: 7
            }}
        >
            <View style={ styles.imgContainer }>
                <Image 
                    source={{ uri }}
                    style={ styles.image }
                />  
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 17
    }, 
    imgContainer: {
        flex:1,
    },
});
