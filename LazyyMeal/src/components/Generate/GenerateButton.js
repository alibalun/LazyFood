const { View, Text, StyleSheet, Pressable } = require("react-native")
import { useNavigation } from "@react-navigation/native";

const GenerateButton = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable style={[styles.container, props.style]} onPress={() => navigation.navigate('Player', { videoId: props.itemId })}>
            <Text style={styles.content}>Video Getir</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4B4F606B',
        borderRadius: 8,
        padding: 7
    },
    content: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700',
        color: 'white'
    }
});
export default GenerateButton;