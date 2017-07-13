import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common/Index';
import LoginForm from './components/LoginForm';
class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCQEM0Ie7zYJH7nYMSgBW48vtsp360STtw',
            authDomain: 'auth-40fc6.firebaseapp.com',
            databaseURL: 'https://auth-40fc6.firebaseio.com',
            projectId: 'auth-40fc6',
            storageBucket: 'auth-40fc6.appspot.com',
            messagingSenderId: '636415498730'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;