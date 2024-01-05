import { Dimensions, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "../../Metrics";
import { useNavigation } from "@react-navigation/native";
const FoodItem = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('MealInformation', { itemId: props.itemId })}>
            <View style={styles.imageContainer}>
                {props.image}
            </View>
            <Text style={styles.contentStyle}>{props.content}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        width: 150,
        marginVertical: 6
    },
    imageContainer: {
        width: '100%',
        height: 150,
        borderRadius: 12
    },
    contentStyle: {
        textAlign: 'center',
        paddingVertical: 4,
        fontSize: 18,
        fontWeight: '700'
    }
});
export default FoodItem;