import { StyleSheet, Text, View } from "react-native";
import Layout from "../Layout";
import PCategoryItem from "../components/ProductCategories/PCategoryItem";
const ProductCategories = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <PCategoryItem />
                <PCategoryItem />
                <PCategoryItem />
                <PCategoryItem />
                <PCategoryItem />
            </View>
        </Layout>
    )
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16
    }
});
export default ProductCategories;