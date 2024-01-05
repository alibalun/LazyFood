const { ScrollView, StyleSheet } = require("react-native");

const GenerateDrawerMenu = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container} scrollEnabled={false}>
            {props.children}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        flexWrap: 'wrap',
        height: 250,
        overflow: 'scroll',
        justifyContent:'center'
    }
});
export default GenerateDrawerMenu;