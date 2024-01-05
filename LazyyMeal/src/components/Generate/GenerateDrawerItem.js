import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GenerateDrawerItem = (props) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '27%', backgroundColor: '#FFFFFF', borderRadius: 4, borderWidth: 1, borderColor: '#DFDFDF', marginVertical: 4, marginHorizontal:8,paddingHorizontal: 4, paddingVertical: 5 }}>
            <Text style={{ marginHorizontal: 6, fontSize: 16 }}>{props.itemName}</Text>
            <AntDesign name="close" size={20} style={{ marginHorizontal: 6 }} />
        </View>
    )
}
export default GenerateDrawerItem;