import React from 'react';

import { StyleSheet, Text, View } from "react-native";

export const Card = ({ item }: any) => {
    return (
        <View style={styles.viewStyleForLine}>
            <View style={{
                width: '50%'
            }}>
                <Text style={styles.text1}>Karen</Text>
            </View>
            <View style={{
                width: '50%'
            }}>
                <Text style={styles.text2}>Boyakhchyan</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyleForLine: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 28,
        borderBottomColor: "gray",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignSelf: 'stretch',
        width: "100%",
        height: 100,
    },
    text1: {
        color: 'blue',
        fontSize: 20
    },
    text2: {

    }
})