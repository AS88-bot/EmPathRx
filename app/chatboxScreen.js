import React, { useState } from 'react';
import { View, TextInput, Button, Text, ScrollView } from 'react-native';
import { getEmpatheticResponse } from '../services/bedrockService';

export default function ChatboxScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = await getEmpatheticResponse(input);
    const botMessage = { sender: 'agent', text: response };
    setMessages((prev) => [...prev, botMessage]);

    setInput('');
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView style={{ flex: 1 }}>
        {messages.map((msg, index) => (
          <Text key={index} style={{ marginVertical: 5, color: msg.sender === 'user' ? 'blue' : 'green' }}>
            {msg.sender === 'user' ? 'You: ' : 'EmPathRx: '}
            {msg.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        placeholder="Type your thoughts..."
        value={input}
        onChangeText={setInput}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}
