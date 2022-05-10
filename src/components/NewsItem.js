import React from 'react';
import { Text, StyleSheet, View, Image, Pressable } from 'react-native';
import { COLORS } from '../styles/theme/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewsItem = ({ artistData }) => {
    return (
        <View style={styles.item}>
            <Image
                source={{ uri: artistData.image }}
                style={{ width: 40, height: 40 }}
            />
            <Text>{artistData.name}</Text>
            <MaterialCommunityIcons name="plus-circle" color={COLORS.red} size={20} />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: COLORS.white,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-evenly',
        borderRadius: 8,
        height: 150
    },
});

export default NewsItem