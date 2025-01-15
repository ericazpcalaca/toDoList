import React, { useState } from 'react';
import {
  Alert,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';
import { colors } from '../../styles/colors';

import { ListOfTasks } from '../../components/ListOfTasks';

export function Home() {
  
  const [toDoList, setToDoList] = useState<{ description: string, completed: boolean }[]>([]);
  const [itemList, setItemList] = useState('');
  
  const completedTasks = toDoList.filter((task) => task.completed).length;

  function handleTaskAdd() {
    if (!itemList.trim()) {
      Alert.alert('Error', 'Task cannot be empty!');
      return;
    }

    setToDoList((prevState) => [
      ...prevState,
      { description: itemList.trim(), completed: false },
    ]);
    setItemList(''); 
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.image} />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          placeholderTextColor={colors.gray[300]}
          autoCorrect={false}
          onChangeText={setItemList}
          value={itemList}
        />

        <Pressable
          onPress={handleTaskAdd}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? colors.blue : colors.blueDark,
            },
            styles.button,
          ]}
        >
          <AntDesign name="pluscircleo" size={16} color={colors.white} />
        </Pressable>
      </View>

      <View style={styles.taskInfoHeader}>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCreated}>Created</Text>
          <Text style={styles.counter}>{toDoList.length}</Text>
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.taskCompleted}>Completed</Text>
          <Text style={styles.counter}>{completedTasks}</Text>
        </View>
      </View>

      <ListOfTasks toDoList={toDoList} setToDoList={setToDoList} />
    </View>
  );
}
