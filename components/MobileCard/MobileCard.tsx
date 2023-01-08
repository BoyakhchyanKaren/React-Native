import { View, Image, ImageSourcePropType, Text } from "react-native";
import MobileCardStyles from "./MobileCardStyles";

interface MobileCardProps {
    id: string,
    image: ImageSourcePropType | undefined,
    title: string,
    discountedPrice: string,
    realPrice: string,
    discount: string,
}

const MobileCard = (phoneData: MobileCardProps) => {
    return (
        <View style={MobileCardStyles.card}>
            <View style={MobileCardStyles.cardContent}>
                <View style={MobileCardStyles.cardImage}>
                    <Image
                        source={phoneData.image}
                    />
                </View>
                <View style={MobileCardStyles.titleWrapper}>
                    <Text style={MobileCardStyles.title}>{phoneData.title}</Text>
                    <View style={MobileCardStyles.pricesWrapper}>
                        <Text style={MobileCardStyles.discountedPrice}>{phoneData.discountedPrice}</Text>
                        <Text style={MobileCardStyles.realPrice}>{phoneData.realPrice}</Text>
                        <Text style={MobileCardStyles.discount}>{phoneData.discount}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
};

export default MobileCard;