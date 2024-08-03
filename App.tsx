import { StatusBar, View } from 'react-native';
import { Header } from './src/components/Header';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Task } from './src/components/Task';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <View style={{
        marginTop: -24,
        paddingLeft: 24,
        paddingRight: 24
      }}>
      </View>
      <View style={{ flex: 1, backgroundColor: theme.COLORS.GRAY_400 }}>
        {
          fontsLoaded ? <Task /> : <Loading />
        }
      </View>
    </ThemeProvider>

  );
}