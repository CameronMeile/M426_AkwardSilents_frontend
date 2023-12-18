import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import Navbar from './Navbar';
import ServerPage from './pages/ServerPage';

const Stack = createNativeStackNavigator();

export const Router = () => {
    return (
        <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomePage' component={HomePage} />
            <Stack.Screen name='ServerPage' component={ServerPage} />
            <Stack.Screen name='Navbar' component={Navbar} />
            <Stack.Screen name='ChatPage' initialParams={{ chatId: undefined }} component={ChatPage} />
            <Stack.Screen name='ProfilePage' component={ProfilePage} />
        </Stack.Navigator>
    );
};
