import { Dimensions, SafeAreaView, StyleSheet, TouchableHighlight, View, Pressable } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
const BottomNavigator = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.bottomNavigator}>
            <Pressable onPress={() => navigation.navigate('Home')} style={{ padding: 12 }}>
                <Entypo name="home" size={32} color="black" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Generate')} style={{ padding: 12 }}>
                <Ionicons name="apps-sharp" size={32} color="black" />
            </Pressable>
            <Pressable onPress={() => navigation.navigate('FavoriteOrders')} style={{ padding: 12 }}>
                <Ionicons name="heart" size={32} color="black" />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    bottomNavigator: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        marginBottom: 30
    }
});
export default BottomNavigator;