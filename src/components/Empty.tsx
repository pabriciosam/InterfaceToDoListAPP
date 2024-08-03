import { Image, Text, View } from "react-native";
import Clipboard from '../../assets/Clipboard.png'
import theme from "../../theme";

export function Empty() {
  return (
    <View
      style={{
        marginTop: 20,
        height: 208,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: theme.COLORS.GRAY_300
      }}
    >
      <Image source={Clipboard} />

      <View style={{ marginTop: 16 }}>
        <Text
          style={{ color: theme.COLORS.GRAY_300, fontFamily: theme.FONT_FAMILY.BOLD }}
        >
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={{ color: theme.COLORS.GRAY_300, fontFamily: theme.FONT_FAMILY.REGULAR }}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}