import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    button:{
        backgroundColor: 'red',
        padding: 10,
        marginBottom: 10,
        marginTop: 10,
        width: '75%',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize: 20,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        fontSize: 20,
        fontWeight: "bold"
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth:1,
        width: "75%",
        marginBottom: 10,
    }
})

export {style}