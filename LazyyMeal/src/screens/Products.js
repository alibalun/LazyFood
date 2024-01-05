import { View } from 'react-native';
import Layout from "../Layout";
import ListItem from '../components/Products/ListItem';
import GenerateButton from '../components/Generate/GenerateButton';
import SaveProduct from '../components/Products/SaveProduct';

const Products = () => {
    return (
        <Layout>
            <ListItem itemName="Elma" />
            <ListItem itemName="Armut" />
            <ListItem itemName="Muz" />
            <ListItem itemName="Kayısı" />
            <ListItem itemName="Kiraz" />
            <SaveProduct />
        </Layout>
    )
}
export default Products;