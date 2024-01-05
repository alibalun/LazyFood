import React, { useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableHighlight, Animated, Easing } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
const DrawerNavigator = () => {
    const navigation = useNavigation();
    const items = [
        {
            name: 'Home',
            icon: 'ICON'
        },
        {
            name: 'Ayarlar',
            icon: 'ICON'
        },
        {
            name: 'Koyu mod',
            icon: 'ICON'
        }
    ];
    const containerWidth = useRef(new Animated.Value(-250));

    return (
        <Animated.View style={[styles.container, { left: containerWidth.current }]}>
            <View style={[styles.subContainer]}>
                {
                    items.map((item) => {
                        return (
                            <TouchableHighlight key={item.name} style={styles.drawerButton}>
                                <Text style={styles.text}>{item.name}</Text>
                            </TouchableHighlight>
                        )
                    })
                }
            </View>
            <TouchableHighlight style={styles.toggleButton} onPress={()=>navigation.openDrawer()} underlayColor={'transparent'}>
                <Icon name="menu" size={32} color="black" />
            </TouchableHighlight>
        </Animated.View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        height: Dimensions.get('window').height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        zIndex: 999,
        width: 250
    },
    drawerButton: {
        width: 230,
        padding: 10,
        backgroundColor: 'green',
        marginVertical: 6,
        borderRadius: 8
    },
    text: {
        fontSize: 18,
    },
    subContainer: {
        top: 50
    },
    toggleButton: {
        position: 'absolute',
        right: -50,
        top: 16,
        zIndex: 50,
    }
});

export default DrawerNavigator;
