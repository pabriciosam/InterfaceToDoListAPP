import { View } from "react-native";
import theme from "../../theme";
import { Info } from "./Info";
import { Empty } from "./Empty";
import { NewTask } from "./NewTask";

export function Task() {
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
        <NewTask />
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
          quantidade="1"
        />
        <Info
          texto="Concluídas"
          textColor={theme.COLORS.PURPLE}
          font={theme.FONT_FAMILY.BOLD}
          quantidade="1"
        />
      </View>

      <Empty />
    </View>
  );
}