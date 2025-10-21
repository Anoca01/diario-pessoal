import React, { useState } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import { supabase } from './supabaseClient'

export default function AuthScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleAuth = async () => {
    if (isLogin) {
      await supabase.auth.signInWithPassword({ email, password })
    } else {
      await supabase.auth.signUp({ email, password })
    }
    navigation.navigate('Home')
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>{isLogin ? 'Login' : 'Registrar'}</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Senha" secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title={isLogin ? 'Entrar' : 'Cadastrar'} onPress={handleAuth} />
      <Button title={isLogin ? 'Criar conta' : 'Já tenho conta'} onPress={() => setIsLogin(!isLogin)} />
    </View>
  )
}
