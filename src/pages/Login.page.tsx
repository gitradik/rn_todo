import React, { Component } from 'react';
import { Text, View } from 'react-native';

export type LoginPageProps = {
  title?: string;
};
type State = {
  title?: string;
};

class LoginPage extends Component<LoginPageProps, State> {
  constructor(props: LoginPageProps) {
    super(props);
    this.state = {
      title: 'Login Page',
    };
  }

  render() {
    const { title } = this.state;
    return (
      <View>
        <Text>{ title }</Text>
      </View>
    );
  }
}

export { LoginPage };