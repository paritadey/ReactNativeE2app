import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';

const DATA = [
  { id: '1', title: 'Afghanistan' },
  { id: '2', title: 'Bahamas' },
  { id: '3', title: 'Cabo Verde	' },
  { id: '4', title: 'Denmark' },
  { id: '5', title: 'Egypt' },
  { id: '6', title: 'Fiji' },
  { id: '7', title: 'Georgia' },
  { id: '8', title: 'Haiti' },
  { id: '9', title: 'India' },
  { id: '10', title: 'Jordan' },
];

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => alert('Country you clicked ' + item.title)}>
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
      alert('List refreshed!');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Text style={styles.header}>Country List</Text>}
        ListFooterComponent={<Text style={styles.footer}>End of List</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        /*refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }*/
        horizontal={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#e1b8b8',
    padding: 24,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    color: '#333333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#333',
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#777',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
  },
});

export default App;