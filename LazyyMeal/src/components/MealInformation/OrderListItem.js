import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const OrderListItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.circle}></View>
            <Text style={styles.textContent}>{props.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 15, // Yarı çapı genişliğin yarısı kadar olan değer, böylece bir daire oluşturulur.
        backgroundColor: 'grey',
        marginRight:4
    }
});

export default OrderListItem;
