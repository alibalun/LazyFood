import { View, Animated, StyleSheet, Pressable, Text, Easing } from 'react-native';
import { useState, useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GenerateDrawerMenu from './GenerateDrawerMenu';
import GenerateDrawerItem from './GenerateDrawerItem';
const GenerateMenu = () => {
    const height = useRef(new Animated.Value(0));
    const rotation = useRef(new Animated.Value(0)); // Yeni bir Animated.Value ekleyin

    const [opened, setOpened] = useState(false);

    const menuAnimation = () => {
        setOpened(!opened);

        if (!opened) {
            Animated.timing(height.current, {
                toValue: 150,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.ease
            }).start();
            Animated.timing(rotation.current, {
                toValue: 1, // 1 tam bir dönüşü temsil eder
                useNativeDriver: false,
                duration: 400,
                easing: Easing.linear
            }).start();
        } else {
            Animated.timing(height.current, {
                toValue: 0,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.ease
            }).start();
            Animated.timing(rotation.current, {
                toValue: 0,
                useNativeDriver: false,
                duration: 400,
                easing: Easing.linear
            }).start();
        }
    }

    const rotate = rotation.current.interpolate({  // Rotate değerini hesaplayın
        inputRange: [0, 1],
        outputRange: ['0deg', '-180deg'] // Dönüş açılarını ayarlayın
    });
    return (
        <View style={styles.container}>
            <Pressable style={[styles.subContainer, { borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: opened ? 0 : 16, borderBottomRightRadius: opened ? 0 : 16 }]} onPress={menuAnimation}>
                <Text style={styles.title}>Sebzeler</Text>
                <Animated.View style={{ transform: [{ rotate: rotate }] }}>
                    <AntDesign name="down" size={28} style={[styles.icon]} color="#878787" />
                </Animated.View>
            </Pressable>
            <Animated.View style={{ backgroundColor: '#F0F0F0', height: height.current, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                {/* <ScrollView contentContainerStyle={{ display: 'flex', flexDirection: 'row', width: '100%', flexWrap: 'wrap', height: 250, overflow: 'scroll' }}> */}
                <GenerateDrawerMenu>
                    {/* There will be dynamic for loop. I will get all itemName with prop from parent and It renders all item*/}
                    <GenerateDrawerItem itemName="Elma" />
                    <GenerateDrawerItem itemName="Armut" />
                    <GenerateDrawerItem itemName="Elma" />
                    <GenerateDrawerItem itemName="Armut" />
                    <GenerateDrawerItem itemName="Elma" />
                    <GenerateDrawerItem itemName="Armut" />
                </GenerateDrawerMenu>
                {/* </ScrollView> */}
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 16
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        paddingVertical: 16,
    },
    title: {
        fontSize: 24,
        marginHorizontal: 24,
        fontWeight: "800",
        color: '#878787'
    },
    icon: {
        marginHorizontal: 16,
    }
});
export default GenerateMenu;