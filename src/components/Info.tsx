import { Text, View } from "react-native";
import theme from "../../theme";

type Props = {
  texto: string,
  textColor: string,
  font: string,
  quantidade: string
}

export function Info({ texto, textColor, font, quantidade }: Props) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ color: textColor, fontFamily: font }}>
        {texto}
      </Text>
      <Text style={{
        color: theme.COLORS.GRAY_100,
        fontFamily: theme.FONT_FAMILY.BOLD,
        backgroundColor: theme.COLORS.GRAY_300,
        marginLeft: 8,
        width: 22,
        height: 19,
        borderRadius: 8,
        paddingLeft: 7
      }}>
        {quantidade}
      </Text>
    </View>
  );
}