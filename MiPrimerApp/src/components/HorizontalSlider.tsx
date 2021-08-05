import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Movies } from '../interfaces/MovieDBInterface'
import { MoviePoster } from './MoviePoster'

interface Props {
    title?: string,
    movies: Movies[]
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    
    return (
        <View style={{  
            height: (title) ? 260 : 220
            }}>
            
            {
            title && <Text style={{ fontSize: 20, fontWeight:'bold', marginLeft:10 }}>
                        { title } 
                    </Text>
            }

            <FlatList
                data={ movies }
                renderItem={ ({item}:any) => (
                    <MoviePoster movie={item} width={ 140 } height={ 200 }/>
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
        </View>
    )
}
