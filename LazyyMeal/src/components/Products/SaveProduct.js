import { Pressable, StyleSheet, Text, View } from "react-native"

const SaveProduct = () => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.content}>Kaydet</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        backgroundColor: '#DFDFDF',
        paddingVertical: 12,
        borderRadius:8,
    },
    content: {
        textAlign: 'center',
        fontSize:18,
        fontWeight:'700',
    }
});
export default SaveProduct;