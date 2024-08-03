import { Image, View } from "react-native";
import Logo from '../../assets/Logo.png'
import theme from "../../theme";

export function Header() {
  return (
    <View style={{
      width: '100%',
      height: 173,
      backgroundColor: theme.COLORS.GRAY_700,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Image source={Logo} />
    </View >
  );
}