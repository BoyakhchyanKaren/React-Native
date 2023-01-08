import { View, Text, Image } from "react-native";
import HeaderStyles from "./HeaderStyles";
const HamburgerIcon = require('../../assets/icons/hamburger.png');
const PurchoseIcon = require('../../assets/icons/purchose.png');

const Header = () => {
    return (
        <View style={HeaderStyles.headerWrapper}>
            <View style={HeaderStyles.menuView}>
                <Image
                    source={HamburgerIcon}
                />
            </View>
            <View style={HeaderStyles.titleView}>
                <Text style={HeaderStyles.titleText}>Ecommerce Store</Text>
            </View>
            <View style={HeaderStyles.purchoseView}>
                <Image
                    source={PurchoseIcon}
                />
            </View>
        </View>
    )
};

export default Header;