import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: "gray",
        borderStyle: "solid",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
    confirm: {
        backgroundColor: "#4CAF50",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    delete: {
        backgroundColor: "#f44336",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    classic: {
        backgroundColor: "#008CBA",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
    },
    buttonText:{
        color: "white",
        fontWeight: "bold",
    },
    input: {
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        marginVertical:10,
    },
    title: {
        fontSize:20,
        textAlign: "center",
        fontWeight: "bold",
    },
    flex:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    modal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(76, 76, 76, 0.5)"
    }
})

export {style}