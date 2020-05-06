import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { HomePage, LoginPage } from "pages";

class App extends Component<any, any> {
  render() {
    return (
      <><Text>Hello World</Text></>
      // <NativeRouter>
      //   <View style={styles.container}>
      //     <View style={styles.nav}>
      //       <Link
      //         to="/"
      //         underlayColor="#EBDDFC"
      //         style={styles.navItem}
      //       >
      //         <Text style={styles.navItemText}>Home</Text>
      //       </Link>
      //       <Link
      //         to="/login"
      //         underlayColor="#EBDDFC"
      //         style={styles.navItem}
      //       >
      //         <Text style={styles.navItemText}>Login</Text>
      //       </Link>
      //     </View>
      //
      //     <Route exact path="/" component={HomePage} />
      //     <Route path="/login" component={LoginPage} />
      //   </View>
      // </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  navItemText: {
    fontSize: 18,
    color: '#740CF6'
  },
  navItemTextActive: {
    color: '#7B1FEC'
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;
