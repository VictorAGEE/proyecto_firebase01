import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'red' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Desconexión',
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="flash" color={color} />,
        }}
      />
      <Tabs.Screen
        name="datos/index"
        options={{
          title:'Datos BBDD',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="disc" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
