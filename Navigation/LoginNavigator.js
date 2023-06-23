import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import ForgetPass from '../Screens/ForgetPass'
import SplashScreen from '../Screens/SplashScreen'
import CreatePassword from '../Screens/CreatePassword'

const { Navigator, Screen } = createStackNavigator();

export default function LoginNavigator() {


    return (
        <Navigator intialRouteName={SplashScreen}>
            <Screen name="SplashScreen" component={SplashScreen}
                options={
                    { headerShown: false }
                } />
            <Screen name="Login" component={Login}
                options={
                    { headerShown: false }
                }/>
            <Screen name="Register" component={Register}
                options={
                    {
                        title: 'Back to Login',
                    }
                }/>
            <Screen name="ForgetPass" component={ForgetPass} 
            options={
                {
                    title: 'Back to Login',
                }
            }/>
            <Screen name="CreatePass" component={CreatePassword} 
            options={
                {
                    title: 'Back to Login',
                }
            }/>

        </Navigator>
    )
}

const styles = StyleSheet.create({})