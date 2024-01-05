const { View, StyleSheet, Dimensions, Image, Text, ScrollView, SafeAreaView, Pressable } = require("react-native");
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import InformationLabel from '../components/MealInformation/InformationLabel';
import FontAwesomeBrand from 'react-native-vector-icons/FontAwesome5Pro';
import IonIcons from 'react-native-vector-icons/Ionicons';
import ProductLabel from '../components/MealInformation/ProductLabel';
import OrderListItem from '../components/MealInformation/OrderListItem';
import GenerateButton from '../components/Generate/GenerateButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getMealInfoRgx } from '../services/services';
import { getProductInformation } from '../services/apiServices';
import { _removeItem, getFavorite, _addItem } from '../services/webApiServices';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const MealInformation = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const itemId = route.params.itemId;
    const [item, setItem] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [mail, setMail] = useState('');
    const [getData, setGetData] = useState(false);
    const fetchData = async () => {
        setItem(null);
        let item = await getProductInformation(itemId);
        setItem(item);
    };
    refreshFavIcon = async () => {
        let value = await getFavorite(itemId, 'deneme@gmail.com');
        setIsFavorite(value);
        return value;
        // console.log(`favValue:${value}`);
    }
    useEffect(() => {
        if (getData == false) {
            setGetData(true);
            navigation.addListener('focus', async () => {
                fetchData();
                await refreshFavIcon();

                GoogleSignin.configure({
                    androidClientId: '1031329850628-je3jdeifk6maobjujnsdul67ep32c6sm.apps.googleusercontent.com',
                });
                const data = await GoogleSignin.getCurrentUser();
                if (data != undefined && data != null) {
                    var email;
                    email = data.user.email;
                    setMail(email);
                }
                setGetData(false);
            });
        }


    }, [itemId, navigation, isFavorite]);

    // source={{uri:item.snippet.thumbnails.medium.url}} 
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    {
                        item !== null ? <Image source={{ uri: item.image }} style={styles.image} /> : null
                    }
                    <View style={styles.iconContainer}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <AntDesign name="left" size={32} color="white" style={styles.leftIcon} />
                        </Pressable>
                        <Pressable onPress={async () => {
                            // triggerFunc(itemId, item.title, item.image);
                            let hasClicked = await refreshFavIcon();
                            if (hasClicked) {
                                // remove an item from database
                                await _removeItem(itemId, mail);
                            }
                            else {
                                // add an item to database
                                hasAdded = await getFavorite(itemId, mail);
                                if (!hasAdded) {
                                    await _addItem(itemId, item.title, item.image, mail);
                                    setIsFavorite(false);
                                }
                                else {
                                    await _removeItem(itemId, mail);
                                    setIsFavorite(true);
                                }
                            }
                        }}>
                            {
                                isFavorite === true ? <MaterialIcon name="favorite" size={32} color="white" style={styles.favoriteIcon} />
                                    : <MaterialIcon name="favorite-outline" size={32} color="white" style={styles.favoriteIcon} />
                            }
                        </Pressable>
                    </View>
                </View>
                <View style={styles.upperContentContainer}>
                    <Text style={styles.title}>{item && item.title}</Text>
                    <Text style={styles.subtitle}>{item && item.subtitle}</Text>
                </View>
                <View style={styles.labelsContainer}>
                    {item && (
                        <>
                            <InformationLabel content={item.prepTime} icon={<FontAwesomeBrand name="gripfire" size={28} color="red" style={styles.icon} />} bgColor="red" />
                            <InformationLabel content={item.personCount} icon={<IonIcons name="person" size={22} color="#4CC9FF" style={styles.icon} />} bgColor="#4CC9FF" />
                            <InformationLabel content={item.cookTime} icon={<AntDesign name="clockcircle" size={22} color="#FFD600" style={styles.icon} />} bgColor="#FFD600" />
                        </>
                    )
                    }
                </View>

                <View style={styles.orderContainer}>
                    {/* <Text style={styles.orderTitle}>Ürünler</Text>
                    <View style={styles.labelContainer}>
                        <ProductLabel title="Pirinç" />
                        <ProductLabel title="Pirinç" />
                        <ProductLabel title="Pirinç" />
                        <ProductLabel title="Pirinç" />
                        <ProductLabel title="Pirinç" />
                    </View> */}
                    <View style={{ marginTop: 20 }}>
                        <Text style={[styles.orderTitle, { color: 'black', fontWeight: '700' }]}>Yemek Tarifi</Text>
                        <Text style={styles.orderDetails}>
                            {
                                item && item.prepContent
                            }
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.orderTitle, { color: 'black', fontWeight: '700' }]}>Kullanılan Malzemeler</Text>
                        <View style={{ marginHorizontal: 32 }}>
                            {
                                item && <OrderListItem content={item.foods} />
                            }
                        </View>
                        <View style={{ marginHorizontal: 16 }}>
                            <GenerateButton style={{ backgroundColor: 'rgba(0,255,56,0.7)', marginTop: 20, marginBottom: 5 }} itemId={itemId} />
                        </View>
                    </View>
                </View>
            </ScrollView >
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        zIndex: 23,
    },
    image: {
        width: Dimensions.get('window').width,
        height: 300,
        zIndex: 10,
    },
    iconContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    leftIcon: {
        marginVertical: 16,
        marginHorizontal: 24
    },
    favoriteIcon: {
        marginVertical: 16,
        marginHorizontal: 24
    },
    upperContentContainer: {
        marginVertical: 24,
        marginHorizontal: 24
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 4,
        color: '#878787'
    },
    subtitle: {
        fontSize: 16,
        marginVertical: 4,
        color: '#878787'
    },
    labelsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    icon: {
        marginHorizontal: 4
    },
    container: {
        backgroundColor: '#FFF1A6',
        overflow: 'scroll',
        height: Dimensions.get('window').height - 22
    },
    orderContainer: {
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: 'white',
        marginTop: 20
    },
    orderTitle: {
        fontSize: 20,
        color: '#878787',
        marginHorizontal: 16,
        marginVertical: 12
    },
    labelContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginHorizontal: 16
    },
    orderDetails: {
        width: '90%',
        // backgroundColor:'green',
        marginHorizontal: 32,
    }
});

export default MealInformation;
