import { StyleSheet } from "react-native";

const HeaderStyles = StyleSheet.create({
    headerWrapper: {
        backgroundColor: '#008ACE',
        height: 70,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    menuView: {
        flex: 1,
    },
    titleView: {
        flex: 2,
        alignItems: 'center',
    },
    purchoseView: {
        flex: 1,
        alignItems: 'flex-end',
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default HeaderStyles;