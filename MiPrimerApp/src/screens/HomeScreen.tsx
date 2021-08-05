import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import movieDB from '../api/MovieDB'

export const HomeScreen = () => {

    useEffect(() => {
       try {
            movieDB.get('/now_playing')
            .then( (resp) => {
                console.log(resp.data);
            });
       } catch (error) {
            console.log(error);
       }
    }, [])

    return (
        <View>
            <Text> HomeScreen </Text>
        </View>
    )
}
