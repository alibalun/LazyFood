const { View, Text, StyleSheet, Image, Pressable } = require("react-native")
import { useNavigation } from "@react-navigation/native";
const PCategoryItem = () => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container} onPress={navigation.navigate('Product')}>
            <Text style={styles.content}>Sebzeler</Text>
            <Image source={require('../../assets/sebze_category-removebg-preview.png')} style={styles.image} />
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        paddingVertical: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius:16,
        marginVertical:12
    },
    content: {
        fontSize: 24,
        marginHorizontal: 12,
        fontWeight:'700',
        color:'#878787'
    },
    image: {
        width: 180,
        height: 100
    }
});
export default PCategoryItem;