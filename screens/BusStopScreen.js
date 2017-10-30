'use strict';

import React, { Component } from 'react';
import BusStopData from '../api/BusStopData';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  FlatList,
} from 'react-native';

class BusStopScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.item}`,
  });

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: [],
	  };
    
	}

  componentDidMount() {
    this.loadData();
  }

	async loadData() {
		const data = BusStopData(this.props.navigation.state.params.item);
		this.setState({
			data
		})
	}

  onPressing(item) {
    const { navigate } = this.props.navigation;
    navigate('BusTimingScreen', {
      item
    });
  }

  render() {
  	const renderItem = ({ item }) => {
      return (
        <TouchableHighlight onPress={() => this.onPressing(item)}>
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        </TouchableHighlight>
      )
    }

    return (
      <View style={styles.container}>
      	<FlatList
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={item => item}
          // ItemSeparatorComponent={() => <Separator/>}
          />
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


export default BusStopScreen;