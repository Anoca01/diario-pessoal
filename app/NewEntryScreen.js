import React, { useState } from 'react'
import { View, TextInput, Button, Text, Alert } from 'react-native'
import { supabase } from './supabaseClient'

export default function NewEntryScreen({ navigation }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSave = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        console.log('Usuário atual:', user)

        const { error } = await supabase.from('entries').insert([
            {
                user_id: user.id,
                title,
                content,
            },
        ])

        if (error) {
            Alert.alert('Erro', error.message)
        } else {
            Alert.alert('Sucesso', 'Entrada criada com sucesso!')
            navigation.navigate('Home')
        }
    }

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Nova Entrada</Text>
            <TextInput
                placeholder="Título"
                value={title}
                onChangeText={setTitle}
                style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
            />
            <TextInput
                placeholder="Conteúdo"
                value={content}
                onChangeText={setContent}
                multiline
                style={{ borderWidth: 1, height: 120, textAlignVertical: 'top', marginBottom: 10, padding: 8 }}
            />
            <Button title="Salvar" onPress={handleSave} />
        </View>
    )
}
