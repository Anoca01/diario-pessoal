import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from './app/index'
import HomeScreen from './app/HomeScreen'
import NewEntryScreen from './app/NewEntryScreen'
import ViewEntryScreen from './app/ViewEntryScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nova Entrada" component={NewEntryScreen} />
        <Stack.Screen name="Visualizar" component={ViewEntryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
