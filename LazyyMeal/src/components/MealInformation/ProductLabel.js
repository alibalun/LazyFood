import { StyleSheet, Text, View } from "react-native"
const ProductLabel = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.contentContainer}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#4CC9FF',
        width:'23%',
        borderRadius:6,
        marginVertical:4,
        paddingHorizontal:4,
        paddingVertical:3
    },
    contentContainer:{
        textAlign:'center',
        fontSize:15,
        color:'black'
    }
});

export default ProductLabel;