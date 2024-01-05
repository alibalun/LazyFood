import { View, Text } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicon from 'react-native-vector-icons/Ionicons';
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#FBECB2' }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginHorizontal: 20 }}>
                    <Ionicon name="pizza-outline" size={28} />
                    <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 30, marginHorizontal: 20, fontWeight: 'bold', color: 'grey' }}>LazyMeal</Text>
                </View>
                <View style={{ backgroundColor: '#fff' }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ marginHorizontal: 12 }}>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 12, alignItems: 'center' }}>
                    <Ionicon name="settings" size={20} />
                    <Text style={{ fontSize: 14, marginHorizontal: 32 }}>Ayarlar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 12, alignItems: 'center' }} onPress={async () => {
                    await GoogleSignin.configure({
                        androidClientId: '1031329850628-je3jdeifk6maobjujnsdul67ep32c6sm.apps.googleusercontent.com',
                    });
                    await GoogleSignin.signOut(); navigation.navigate('GoogleAuth');
                }}>
                    <Ionicon name="close" size={20} />
                    <Text style={{ fontSize: 14, marginHorizontal: 32 }}>Çıkış Yap</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomDrawer;