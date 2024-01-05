import Layout from "../Layout";

const { View, Text, StyleSheet, Dimensions } = require("react-native")
import IonIcons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Step = () => {
    return (
        <View style={styles.container}>
            <IonIcons name="close-circle-outline" size={32} style={{ position: 'absolute', right: 20, top: 20 }} />
            <View style={styles.subContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Adım #1</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>
                        Uygun bir pilav
                        tenceresinin
                        içerisine tereyağı
                        ekleyin.
                    </Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.direction}>
                    <AntDesign name="left" size={26} />
                </View>
                <View style={styles.hideButton}>
                    <Text style={styles.hideContent}>Tarifi Gizle</Text>
                </View>
                <View style={styles.direction}>
                    <AntDesign name="right" size={26} />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF1A6',
        height: Dimensions.get('window').height
    },
    titleContainer: {
        paddingVertical: 12,
        top: 10
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    subContainer: {
        marginVertical: 128
    },
    content: {
        fontSize: 28,
        fontWeight: "700",
        marginHorizontal: 24
    },
    contentContainer: {
        marginHorizontal: 24,
        backgroundColor: 'white',
        height: 200,
        borderRadius: 12,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        top: 70
    },
    directionLeft: {
        width: 80,
        height: 20,
        backgroundColor: 'white'
    },
    direction: {
        width: 60,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width
    },
    hideButton: {
        backgroundColor: 'white',
        width: 170,
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    hideContent: {
        fontSize: 20,
        fontWeight:'700'
    }
});
export default Step;