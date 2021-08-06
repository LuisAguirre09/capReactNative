import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { UseMovieDetails } from '../hooks/UseMovieDetails';
import { MovieDetail } from '../components/MovieDetail';

const screenHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

export const DetailScreen = ( {route, navigation}: Props ) => {

    const movie = route.params;
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

    const { isLoading, movieFull, cast } = UseMovieDetails( movie.id );

    return (

        <ScrollView>
            {/* Imagen */}
            <View style={styles.imgContainer}>
                <Image 
                    source={{ uri }}
                    style={ styles.posterImage }
                />
            </View>
            
            {/* Title n subtitle */}
            <View style={ styles.marginContainer }>
                <Text style={ styles.title }> { movie.original_title } </Text>
                <Text style={ styles.subtitle }> { movie.title } </Text>
            </View>

            {/* star n detail */}
            {
                isLoading 
                ? <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }}/>
                : <MovieDetail movieFull={ movieFull! } cast={ cast } />
            }

            {/* Buton para cerra */}
            <TouchableOpacity 
                onPress={ () => navigation.pop() }
                style={ styles.backButton }>
                <Icon
                    name="arrow-back-circle-outline"
                    color="white"
                    size={44}
                    style={{ left:1.5 }}

                />
            </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1,
    },
    imgContainer: {
        width: '100%',
        overflow: 'hidden',
        height: screenHeight * 0.7,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 14,
        opacity: 0.5
    }, 
    backButton: {
        backgroundColor: 'black',
        borderRadius: 50,
        position:'absolute',
        zIndex: 99,
        elevation: 9,
        height: 46,
        top:8,
        left: 8
    }
})
