import { View, Text } from "react-native";
import Layout from "../Layout";
import FavoriteItem from "../components/Favorites/FavoriteItem";
import { useEffect } from "react";
import { getItems } from "../services/webApiServices";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { getUserMail } from "../services/googleAuth";

const Favorites = () => {
    const [items, setItems] = useState([]);
    const [userMail, setUserMail] = useState('');
    const navigation = useNavigation();
    const fetchData = async (userMail) => {
        try {
            const data = await getItems(userMail);
            console.log(data);
            if (data != null && data.foods != null) {
                setItems(data.foods); // Assuming that the data structure has a "foods" property
            } else {
                setItems([]); // Set items to an empty array if data or data.foods is null
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setItems([]); // Set items to an empty array in case of an error
        }
    };
    
    useEffect(() => {

        navigation.addListener('focus', async () => {
            let mail = await getUserMail();
            await fetchData(mail);
        });
    }, [navigation]);

    return (
        <Layout layoutTitle="Favori Tarifler">
            {
                items !== null
                    ? items.map((item) => <FavoriteItem key={item.id} title={item.title} image={item.imagePath}/>)
                    : <Text>No favorite items found</Text>
            }
        </Layout>
    );
    
};

export default Favorites;
