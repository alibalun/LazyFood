const { View, StyleSheet, Text, Image, Pressable } = require("react-native")
import { useNavigation } from '@react-navigation/native';

const Category = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable style={{ paddingHorizontal: 16, position: 'relative', marginVertical: 10 }} onPress={() => navigation.navigate('MealOrder', { playListId: props.playListId})}>
            <View style={[styles.container, { backgroundColor: props.backgroundColor }]}>
                <Text style={[styles.title, { color: props.color }]}>{props.title}</Text>
            </View>
            <View>
                {props.image}
            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 150,
        borderRadius: 16,
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        width: 140,
        left: 20,
        fontWeight: '700'
    }
});
export default Category;