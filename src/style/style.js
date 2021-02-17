import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    header: {
        backgroundColor: "gray",
        textAlign: "center",
        padding: 10,
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: "center",
        borderRadius: 5
    },
    card: {
        width: 220,
        backgroundColor: "rgb(225, 224, 224)",
        margin: 20,
        borderTopRightRadius: 10,
        borderTopStartRadius: 10,
    },
    title:{
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10,
    },
    subtitle: {
        marginLeft:10,
        fontSize: 10,
    },
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }

})

export {estilo}