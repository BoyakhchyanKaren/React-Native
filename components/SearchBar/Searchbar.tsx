import { TextInput, View, Image } from "react-native";
import SearchBarStyles from "./SearchBarStyles";
const SearchIcon = require('../../assets/icons/search2.png')

const SearchBar = () => {
    return (
        <View style={SearchBarStyles.inputWrapper}>
            <View style={SearchBarStyles.searchInputWrapper}>
                <Image
                    source={SearchIcon}
                    style={{ width: 25, height: 25, margin: 10, }}
                />
                <TextInput
                    placeholder="Search Device"
                />
            </View>
        </View>
    )
};

export default SearchBar;