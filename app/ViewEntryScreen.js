import React from 'react'
import { View, Text, Button } from 'react-native'

export default function ViewEntryScreen({ route, navigation }) {
  const { entry } = route.params

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{entry.title}</Text>
      <Text style={{ marginVertical: 10 }}>{entry.content}</Text>
      <Text style={{ color: 'gray' }}>
        Criado em: {new Date(entry.created_at).toLocaleString()}
      </Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}
