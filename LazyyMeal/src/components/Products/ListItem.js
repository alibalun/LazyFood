const { View, Text, StyleSheet, Pressable } = require("react-native")

const ListItem = (props) => {
    return (
        <Pressable style={styles.container}>
            <Text style={styles.content}>{props.itemName}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        color: '#878787',
        paddingVertical:12,
        paddingHorizontal:24,
        marginHorizontal:16,
        marginVertical:6
    },
    content:{
        fontSize:20,
        fontWeight:'800'
    }
});
export default ListItem;