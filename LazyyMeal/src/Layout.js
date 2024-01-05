import DrawerNavigator from "./navigators/DrawerNavigator";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavigator from "./navigators/BottomNavigator";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import React from "react";
const { View, Text, Dimensions, StyleSheet, TextInput, ScrollView, Pressable } = require("react-native");
import { AppContext } from "../App";


const Layout = (props) => {
    const navigation = useNavigation();
    const [changedText, setChangedText] = useState('');
    const context = useContext(AppContext);
    const handleInputChange = (text) => {
        setChangedText(text);
    }
    return (
        <View style={styles.container}>
            <DrawerNavigator />
            <View style={{ position: 'absolute', top: 0 }}>
                <View style={styles.navbarContainer}>
                    <Text style={styles.navBarsIcon}></Text>
                    <Text style={{ fontSize: 20 }}>Lazy Meal</Text>
                    <Text style={styles.navSettingsIcon}><AntDesign name="setting" size={32} color="black" /></Text>
                </View>
                <View style={styles.filter}>
                    <View style={styles.searchFilterContainer}>
                        <MaterialIcon name="search" size={32} style={{ marginLeft: 20, marginRight: 5 }} color="white" />
                        <TextInput style={styles.searchInputContainer} placeholder="Kategori ara" placeholderTextColor={'#E3E3E3'} onChangeText={handleInputChange} onSubmitEditing={()=>{context.changeFilterItems(changedText)}}/>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, marginLeft: 20, marginVertical: 20 }}>{props.layoutTitle}</Text>
                    {
                        props.generatePage ? <Pressable style={styles.titleSection} onPress={() => navigation.navigate('ProductCategories')}>
                            <Ionicons name="add" size={36} color="white" />
                        </Pressable> : ''
                    }

                </View>
                <ScrollView style={styles.scrollItems} showsVerticalScrollIndicator={false}>{props.children}</ScrollView>
            </View>
            <BottomNavigator />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        top: 0
    },
    navbarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: 60,
    },
    navSettingsIcon: {
        paddingHorizontal: 20,
        fontSize: 20,
        width: 70
    },
    navBarsIcon: {
        paddingHorizontal: 20,
        width: 70,
        height: '100%',
    },
    searchFilterContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 24,
        backgroundColor: '#BCBCBC',
    },
    searchInputContainer: {
        width: '75%',
        color: 'white',
        fontWeight: '800',
        fontSize: 18
    },
    filter: {
        paddingHorizontal: 16,
        width: Dimensions.get('window').width,
        top: 20,
        marginBottom: 20
    },
    scrollItems: {
        display: 'flex',
        flex: 1,
        height: Dimensions.get('window').height - 300
    },
    titleSection: {
        marginHorizontal: 20,
        backgroundColor: '#BCBCBC',
        width: 40,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    }
});
export default Layout;