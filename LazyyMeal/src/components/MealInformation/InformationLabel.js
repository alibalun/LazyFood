import { StyleSheet, Text, View } from "react-native";

const InformationLabel = (props) => {
    return (
        <View style={styles.container}>
            {props.icon}
            <View style={[styles.contentContainer, { backgroundColor: props.bgColor }]}>
                <Text style={styles.content}>{props.content}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
    },
    contentContainer: {
        backgroundColor: 'red',
        width: 90,
        borderRadius: 6
    },
    content: {
        textAlign: 'center',
        paddingVertical: 3,
        fontSize: 14,
        color: 'white',
    }
});
export default InformationLabel;