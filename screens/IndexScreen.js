'use strict';

import React, { Component } from 'react';
import IndexData from '../api/IndexData';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  FlatList,
} from 'react-native';

class IndexScreen extends Component {
  static navigationOptions = {
    title: 'NTU Buses',
  };

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	data: [],
	  };
    this.loadData();
	}

	async loadData() {
    const data = await IndexData();

		this.setState({
			data
		})
	}

  onPressing(item) {
    const { navigate } = this.props.navigation;
    navigate('BusStopScreen', {
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


export default IndexScreen;