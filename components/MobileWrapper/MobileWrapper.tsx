import { FlatList, View, Image } from "react-native"
import MobileWrapperStyles from "./MobileWrapperStyles";
import { phoneData } from "../../constants/phoneData";
import MobileCard from "../MobileCard/MobileCard";

const MobileWrapper = () => {
    return (
        <View style={MobileWrapperStyles.cardWrapper}>
            <View style={MobileWrapperStyles.cardList}>
                {
                    phoneData.map((phone) => {
                        return (
                            <MobileCard
                                id={phone.id}
                                image={phone.image}
                                title={phone.title}
                                discountedPrice={phone.discountedPrice}
                                realPrice={phone.realPrice}
                                discount={phone.discount}
                            />
                        )
                    })
                }
            </View>
        </View>
    )
};

export default MobileWrapper;