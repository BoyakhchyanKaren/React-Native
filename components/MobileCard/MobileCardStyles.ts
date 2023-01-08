import { StyleSheet } from "react-native";

const MobileCardStyles = StyleSheet.create({
    card: {
        width: 180,
        height: 170,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        margin: 17,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        borderRadius: 5,
        elevation: 3,
    },
    cardContent: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cardImage: {
        marginTop: 5,
        height: 110,
    },
    titleWrapper: {
        height: 50,
        paddingHorizontal: 5,
        width: '100%',
    },
    pricesWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        color: '#4A4A4A'
    },
    discountedPrice: {
        fontSize: 18,
        fontWeight: '600',
    },
    discount: {
        fontSize: 18,
        fontWeight: '600',
        color: '#00A8F3',
    },
    realPrice: {
        textDecorationLine: 'line-through',
        fontSize: 18,
        fontWeight: '400',
        color: '#8F8F8F'
    }
});

export default MobileCardStyles;