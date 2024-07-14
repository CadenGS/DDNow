import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';

const DATA = [
  { id: '1', name: 'John Smith', address: '1242 Washington Ave', party: 3 },
  { id: '2', name: 'Bomb Guy', address: '1242 Washington Ave', party: 1 },
  { id: '3', name: 'John Smith', address: '1242 Washington Ave', party: 2 },
];

export default function QueueScreen({ navigation }) {
  const renderItem = (data, index) => {
    const backgroundColor = index % 2 === 0 ? '#E0E0E0' : 'white';

    return (
      <ListItem containerStyle={{ backgroundColor }} bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{data.item.name}</ListItem.Title>
          <ListItem.Subtitle>{data.item.address}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Content right>
          <ListItem.Title>Party Of {data.item.party}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Icon
          name="delete"
          color="white"
          onPress={() => alert('Delete pressed')}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={DATA}
        renderItem={({ item, index }) => renderItem({ item }, index)}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3F3434',
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
});
