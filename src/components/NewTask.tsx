import { Image, TextInput, TouchableOpacity, View } from "react-native";
import theme from "../../theme";
import IconAdd from '../../assets/IconAdd.png'
import { useState } from "react";

type Props = {
  addTask: (task: string) => void
}

export function NewTask({ addTask }: Props) {
  const [task, setTask] = useState('')

  function handleAddNewTask() {
    addTask(task);
    setTask('');
  }

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
        value={task}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={theme.COLORS.GRAY_300}
        onChangeText={setTask}
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
        onPress={handleAddNewTask}
      >
        <Image source={IconAdd} />
      </TouchableOpacity>
    </View >
  );
}