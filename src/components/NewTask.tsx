import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import IconAdd from '../../assets/IconAdd.png'

export function NewTask() {
  return (
    <View
      style={{
        flexDirection: 'row'
      }}
    >
      <TextInput
        style={{
          backgroundColor: theme.COLORS.GRAY_500,
          borderRadius: 6,
          color: theme.COLORS.GRAY_100,
          padding: 16,
          width: 312,
          fontFamily: theme.FONT_FAMILY.REGULAR,
          height: 48
        }}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.COLORS.GRAY_300}
      />

      <TouchableOpacity
        style={{
          height: 48,
          width: 48,
          marginLeft: 4,
          backgroundColor: theme.COLORS.BLUE_DARK,
          borderRadius: 6,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image source={IconAdd} />
      </TouchableOpacity>
    </View >
  );
}