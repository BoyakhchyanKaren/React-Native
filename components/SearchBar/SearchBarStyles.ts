import { StyleSheet } from "react-native";

const SearchBarStyles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        height: 70,
        justifyContent: "center",
        alignItems: 'center',
        borderColor: 'black',
        padding: 17,
        display: 'flex',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    searchInputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        position: 'absolute',
    }
});

export default SearchBarStyles;