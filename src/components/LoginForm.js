import React, {Component} from 'react';
import {Button, Input, Card, CardSection} from './common/Index';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        label="Email"
                        placeholder="user@mail.com"/>
                </CardSection>
                <CardSection>
                    <Input
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        label="Password"
                        secureTextEntry
                        placeholder="***************"/>
                </CardSection>

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default LoginForm;