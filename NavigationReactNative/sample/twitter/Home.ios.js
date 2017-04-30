import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import Tweets from './Tweets';

export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.url = props.stateNavigator.stateContext.url;
  }
  shouldComponentUpdate(props) {
    return this.url === props.stateNavigator.stateContext.url;
  }
  render() {
    const {tweets, stateNavigator} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.banner}>
          <Text style={styles.title}>Home</Text>
        </View>
        <ScrollView style={styles.view}>
          <Tweets tweets={tweets} stateNavigator={stateNavigator} />
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  banner: {
    paddingTop: 30,
    paddingLeft: 50,
    paddingBottom: 22,
    borderBottomWidth: 2,
    borderColor: '#ccd6dd',
  },
  title: {
    fontWeight: 'bold',
  },
  view: {
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
});
