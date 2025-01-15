import React from 'react';
import { Text, View, FlatList, Image, Alert } from 'react-native';

import { styles } from './styles';
import { Tasks } from '../../components/Tasks';

type Props = {
  toDoList: string[];
  setToDoList: React.Dispatch<React.SetStateAction<string[]>>;
};

export function ListOfTasks({ toDoList, setToDoList }: Props) {
  function handleTaskRemove(name: string) {
    Alert.alert('Remove Task', `Do you wish to remove this task?`, [
      {
        text: 'Yes',
        onPress: () =>
          setToDoList((prevState) => prevState.filter((task) => task !== name)),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Tasks
            key={item}
            taskDescription={item}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <View style={styles.lineStyle} />
            <Image
              source={require('../../assets/clipboard.png')}
              style={styles.imageEmptyList}
            />
            <Text style={styles.listEmptyTextHeader}>
              You do not have any registered tasks yet.
            </Text>
            <Text style={styles.listEmptyText}>
              Create tasks and organize your to-do items
            </Text>
          </View>
        )}
      />
    </View>
  );
}
