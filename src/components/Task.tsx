import { Alert, ScrollView, View } from "react-native";
import theme from "../../theme";

import { Info } from "./Info";
import { Empty } from "./Empty";
import { NewTask } from "./NewTask";
import { List } from "./List";
import { useState } from "react";

export function Task() {
  const [tasks, setTasks] = useState<string[]>([])
  const [countTaskSelected, setCountTaskSelected] = useState(0)

  function handleAddTask(newTask: string) {
    if (tasks.includes(newTask))
      return Alert.alert('Informe!', 'Já existe uma tarefa com essa descrição!')

    setTasks(prevState => [...prevState, newTask])
  }

  function handleRemoveTask(taskToRemove: string, taskSelected: boolean) {
    if (taskSelected)
      setCountTaskSelected(countTaskSelected - 1)

    setTasks(prevState => prevState.filter(task => task !== taskToRemove))
  }

  function handleCheckUncheckTask(taskSelected: boolean) {
    if (taskSelected)
      setCountTaskSelected(countTaskSelected + 1)
    else
      setCountTaskSelected(countTaskSelected - 1)
  }

  return (
    <View
      style={{
        paddingLeft: 22,
        paddingRight: 22,
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
          quantidade={countTaskSelected.toString()}
        />
      </View>

      <ScrollView>
        <View style={{ marginTop: 24 }}>
          {
            tasks.length === 0 ?
              <Empty /> :
              tasks.map((item, index) => (
                <List key={index} description={item} selectTask={handleCheckUncheckTask} removeTask={handleRemoveTask} />
              ))
          }
        </View>
      </ScrollView>

    </View>
  );
}