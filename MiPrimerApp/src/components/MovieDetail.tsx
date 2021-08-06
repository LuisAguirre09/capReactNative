import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/CreditsInterface'
import { MovieFull } from '../interfaces/MovieDBInterface'
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieFull: MovieFull,
    cast: Cast[]
}

export const MovieDetail = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* detalle */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection:'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text> {movieFull.vote_average } </Text>

                    <Text style={{ marginLeft:4 }}>
                        - {movieFull.genres.map( g => g.name).join(', ')}
                    </Text>
                </View>

                {/* historia */}
                <Text style={{ fontSize:20, marginTop:10, fontWeight:'bold' }}>
                    Historia
                </Text>
                
                <Text style={{ fontSize:14 }} >
                    {movieFull.overview}
                </Text>

                {/* presupuesto */}
                <Text style={{ fontSize:20, marginTop:10, fontWeight:'bold' }}>
                    Presupuesto
                </Text>
                
                <Text style={{ fontSize:16 }} >
                    { currencyFormatter.format( movieFull.budget, {locale: 'en-US'} ) }
                </Text>
            </View>

            {/* cast */}
            <View style={{ marginTop: 10, marginBottom: 100 }}>
                <Text style={{ fontSize:20, marginTop:10, fontWeight:'bold', marginHorizontal:20 }}>
                    Actores
                </Text>
                <FlatList 
                    data={ cast }
                    keyExtractor={ (item, index ) => item.id.toString() + index }
                    renderItem={ ({ item }) => <CastItem actor={ item } /> }
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10, height: 70 }}
                />
            </View>
        </>
    )
}
