import { StyleSheet, SafeAreaView, Text } from "react-native";
import ProductListingScreen from "./screens/ProductListingScreen"
export default function App(){
    return <SafeAreaView style = {styles.container}>
        <ProductListingScreen/>


    </SafeAreaView>

} 
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",


    },

});