import { View, Text, StyleSheet, Image } from "react-native";


const FavoriteItem = (props) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:props.image}} alt={"Image not found"} width={75} height={50}/>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#D8D9DA',
        paddingVertical:16,
        paddingHorizontal:16,
        fontSize:18,
        borderRadius:4,
        marginVertical:4,
        display:'flex',
        flexDirection:'row'
    },
    title:{
        textAlign:'left',
        width:'85%',
        marginHorizontal:12
    }
});
export default FavoriteItem;