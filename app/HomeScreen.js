import React, { useEffect, useState } from 'react'
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native'
import { supabase } from './supabaseClient'

export default function HomeScreen({ navigation }) {
  const [entries, setEntries] = useState([])

  const fetchEntries = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const { data, error } = await supabase
      .from('entries')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    
    if (!error) setEntries(data)
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Nova Entrada" onPress={() => navigation.navigate('Nova Entrada')} />
      <FlatList
        data={entries}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Visualizar', { entry: item })}>
            <View style={{ borderBottomWidth: 1, padding: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
              <Text>{new Date(item.created_at).toLocaleString()}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
