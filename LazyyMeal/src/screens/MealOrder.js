import { Image, StyleSheet, View } from "react-native";
import Layout from "../Layout";
import FoodItem from "../components/MealOrder/FoodItem";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { getPlayListInfo } from "../services/apiServices";

const MealOrder = () => {
    const [items, setItems] = useState([]);
    const route = useRoute();
    const fetchData = async () => {
        let item = await getPlayListInfo(route.params.playListId);
        
        setItems(item);
    }
    useEffect(() => {
        fetchData();
        // fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=' + route.params.playListId + '&key=AIzaSyBk1Bwbn1A-dakmipdDKFhcd6DW1Mkg1eM&maxResults=50')
    }, [route.params.playListId]);
    return (
        <Layout layoutTitle="Tarifler">
            <View style={styles.listContainer}>
                {/* <FoodItem content="Fasulye" image={<Image source={require("../assets/foods/misirli_pilav_image.jpeg")} style={styles.image} />} />*/}
                {
                    items.map((item) => {
                        return (
                            <FoodItem content={item.snippet.title} image={< Image source={{ uri: item.snippet.thumbnails.medium.url }} style={styles.image} />} key={item.id} itemId={item.snippet.resourceId.videoId} />
                        )
                    })
                }
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 16,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 12
    }
});
export default MealOrder;