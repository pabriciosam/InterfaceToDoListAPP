import { Alert, ScrollView, View } from "react-native";
import theme from "../../theme";

import { Info } from "./Info";
import { Empty } from "./Empty";
import { NewTask } from "./NewTask";
import { List } from "./List";
import { useState } from "react";

export function Task() {
  const [tasks, setTasks] = useState<string[]>([])

  function handleAddTask(newTask: string) {
    if (tasks.includes(newTask))
      return Alert.alert('Informe!', 'Já existe uma tarefa com essa descrição!')

    setTasks(prevState => [...prevState, newTask])
  }

  function handleRemoveTask(taskToRemove: string) {
    setTasks(prevState => prevState.filter(task => task !== taskToRemove))
  }

  return (
    <View
      style={{
        paddingLeft: 24,
        paddingRight: 24,
        marginTop: 29,
        flex: 1
      }}
    >
      <View style={{ marginTop: -58, marginBottom: 32 }}>
        <NewTask addTask={handleAddTask} />
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          backgroundColor: theme.COLORS.GRAY_400
        }}
      >
        <Info
          texto="Criadas"
          textColor={theme.COLORS.BLUE}
          font={theme.FONT_FAMILY.BOLD}
          quantidade={tasks.length.toString()}
        />
        <Info
          texto="Concluídas"
          textColor={theme.COLORS.PURPLE}
          font={theme.FONT_FAMILY.BOLD}
          quantidade="0"
        />
      </View>

      <ScrollView>
        <View style={{ marginTop: 24 }}>
          {
            tasks.length === 0 ?
              <Empty /> :
              tasks.map((item, index) => (
                <List key={index} description={item} removeTask={handleRemoveTask} />
              ))
          }
        </View>
      </ScrollView>

    </View>
  );
}