import { StyleSheet } from "react-native";

const MobileWrapperStyles = StyleSheet.create({
    cardWrapper: {
        flex: 1,
    },
    cardList: {
        width: '100%',
        display: "flex",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
});

export default MobileWrapperStyles;