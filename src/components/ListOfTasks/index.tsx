import React from 'react';
import { Text, View, FlatList, Image, Alert } from 'react-native';

import { styles } from './styles';
import { Tasks } from '../../components/Tasks';

type Props = {
  toDoList: { description: string; completed: boolean }[];
  setToDoList: React.Dispatch<React.SetStateAction<{ description: string; completed: boolean }[]>>;
};

export function ListOfTasks({ toDoList, setToDoList }: Props) {
  function handleTaskRemove(name: string) {
    Alert.alert('Remove Task', `Do you wish to remove this task?`, [
      {
        text: 'Yes',
        onPress: () =>
          setToDoList((prevState) => prevState.filter((task) => task.description !== name)),
      },
      {
        text: 'No',
        style: 'cancel',
      },
    ]);
  }

  const toggleTaskCompletion = (name: string) => {
    setToDoList((prevState) =>
      prevState.map((task) =>
        task.description === name
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoList}
        keyExtractor={(item) => item.description}
        renderItem={({ item }) => (
          <Tasks
            taskDescription={item.description}
            completed={item.completed}
            onRemove={() => handleTaskRemove(item.description)}
            onToggleCompletion={() => toggleTaskCompletion(item.description)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyView}>
            <View style={styles.lineStyle} />
            <Image source={require('../../assets/clipboard.png')} style={styles.imageEmptyList} />
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
