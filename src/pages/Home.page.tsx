import React, { Component } from 'react';
import { Text, View } from 'react-native';

export type HomePageProps = {
  title?: string;
};
type State = {
  title?: string;
};

class HomePage extends Component<HomePageProps, State> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      title: 'Home Page',
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

export { HomePage };