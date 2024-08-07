import { Image, Text, TouchableOpacity, View } from "react-native"
import theme from "../../theme";
import Trash from '../../assets/Trash.png'
import Check from '../../assets/Check.png'
import { useState } from "react";

type Props = {
  description: string,
  removeTask: (task: string) => void
}

export function List({ description, removeTask }: Props) {
  const [selected, setSelected] = useState(false)

  function handleSelected() {
    setSelected(!selected)
  }

  function handleRemoveNewTask() {
    removeTask(description);
  }

  return (
    <View
      style={{
        paddingBottom: 8,
        backgroundColor: theme.COLORS.GRAY_400
      }}
    >
      <View
        style={{
          paddingTop: 12,
          paddingBottom: 12,
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
          backgroundColor: theme.COLORS.GRAY_500,
          borderRadius: 8
        }}
      >
        <TouchableOpacity
          style={{
            height: 20,
            width: 20,
            marginLeft: 12,
            marginRight: 8,
            backgroundColor: theme.COLORS.GRAY_500,
            borderRadius: 50,
            borderColor: theme.COLORS.BLUE_DARK,
            borderWidth: selected ? 0 : 2
          }}
          onPress={handleSelected}
        >
          <Image source={Check} style={{ display: selected ? 'flex' : 'none' }} />
        </TouchableOpacity>

        <View style={{ flex: 1, alignItems: 'flex-start' }}>
          <Text
            style={{
              color: selected ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100,
              textDecorationLine: selected ? 'line-through' : 'none'
            }}
          >
            {description}
          </Text>

        </View>

        <TouchableOpacity style={{ marginRight: 8 }} onPress={handleRemoveNewTask}>
          <Image source={Trash} />
        </TouchableOpacity>

      </View>
    </View>
  );
}