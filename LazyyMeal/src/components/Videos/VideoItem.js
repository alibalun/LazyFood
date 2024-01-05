import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const VideoItem = (props) => {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Player', { videoId: props.videoId })}>
            <View style={styles.image}>
                <Image source={{ uri: props.image }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeader} numberOfLines={2} ellipsizeMode="tail">{props.title}</Text>
                <Text style={styles.detailsContent}>08.12.2023</Text>
            </View>
        </Pressable>
    )
}
export default VideoItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: 120,
        marginVertical: 5,
    },
    image: {
        height: 120,
        width: 120,
        backgroundColor: 'red',
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6
    },
    details: {
        width: 290,
        backgroundColor: '#E3E3E3',
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    detailsHeader: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black',
        padding: 6
    },
    detailsContent: {
        fontStyle:"italic",
        fontSize: 16,
        margin: 6
    }
});