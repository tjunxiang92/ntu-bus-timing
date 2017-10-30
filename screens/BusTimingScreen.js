'use strict';

import React, { Component } from 'react';
import BusTimingData from '../api/BusTimingData';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  FlatList,
} from 'react-native';

class BusTimingScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.item}`,
  });

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: [],
      refreshing: true,
	  };
    this.handleRefresh();
	}

	async handleRefresh() {
    this.setState({
      refreshing: true,
    })
    console.log(this.props.navigation.state.params.item);
		const dict = await BusTimingData(this.props.navigation.state.params.item);
    const data = Object.keys(dict).map(key => ({
      bus: key,
      time: dict[key].map(time => `${(time / 60).toFixed(0)} mins`).join(', ')
    }));

		this.setState({
			data,
      refreshing: false,
		})
	}

  render() {
  	const renderItem = ({ item }) => {
      return (
        <View style={styles.item}>
          <Text>{item.bus}</Text>
          <Text>{item.time}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
      	<FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={item => item}
          // ItemSeparatorComponent={() => <Separator/>}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
          />
          <View style={styles.item}>
            <Text>Pull to Refresh</Text>
            <Text>If timing does not appear, it means bus might be too far away</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  }
});


export default BusTimingScreen;