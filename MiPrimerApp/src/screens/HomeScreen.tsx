import React from 'react'
import { ActivityIndicator, Dimensions, ScrollView, Text, View } from 'react-native'
import { MoviePoster } from '../components/MoviePoster'
import { UseMovies } from '../hooks/UseMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';
import { FlatList } from 'react-native-gesture-handler';
const { width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = UseMovies();
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
                        data={ peliculasEnCine }
                        renderItem={ ({ item }) => <MoviePoster movie={ item }/> }    
                        sliderWidth={ windowsWidth }
                        itemWidth={ 300 }
                    />
                </View>

                {/* Popular movies */}
                <View style={{ backgroundColor:'gray', height:260 }}>
                    <Text> Peliculas populares </Text>
                    <FlatList
                        data={ peliculasEnCine }
                        renderItem={ ({item}:any) => (
                            <MoviePoster movie={item} width={ 140 } height={ 200 }/>
                        )}
                        keyExtractor={ (item) => item.id.toString() }
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                    />
                </View>

                {/* Popular movies */}
                <View style={{ backgroundColor:'gray', height:260 }}>
                    <Text> Peliculas populares </Text>
                    <FlatList
                        data={ peliculasEnCine }
                        renderItem={ ({item}:any) => (
                            <MoviePoster movie={item} width={ 140 } height={ 200 }/>
                        )}
                        keyExtractor={ (item) => item.id.toString() }
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                    />
                </View>
            </ScrollView>
        </View>
    )
}
