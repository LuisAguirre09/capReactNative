import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native'
import { MoviePoster } from '../components/MoviePoster'
import { UseMovies } from '../hooks/UseMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
const { width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = UseMovies();
    const { top } = useSafeAreaInsets();

    if ( isLoading ){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={ 80 }/>
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 20 }}>
            <ScrollView>
                
                <View style={{ height: 440 }}>
                    <Carousel
                        data={ nowPlaying }
                        renderItem={ ({ item }) => <MoviePoster movie={ item }/> }    
                        sliderWidth={ windowsWidth }
                        itemWidth={ 300 }
                    />
                </View>

                {/* Popular movies */}
                <HorizontalSlider title="Populares" movies={ popular } />
                <HorizontalSlider title="Mejor calificadas" movies={ topRated } />
                <HorizontalSlider title="Proximamente" movies={ upcoming } />


            </ScrollView>
        </View>
    )
}
