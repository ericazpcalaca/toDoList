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
    const [toDoList, setToDoList] = useState<string[]>([]);
    const [itemList, setItemList] = useState('');

    function handleTaskAdd() {
        // setToDoList((prevState) => [...prevState, itemList]);
        // setItemList('');
        console.log("Clicou!")
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
                        styles.button
                    ]}
                >
                    <AntDesign name="pluscircleo" size={16} color={colors.white} />
                </Pressable>
            </View>

            <View style={styles.taskInfoHeader}>
                <View style={styles.taskInfo}>
                    <Text style={styles.taskCreated}>Created</Text>
                    <Text style={styles.counter}>5</Text>
                </View>
                <View style={styles.taskInfo}>
                    <Text style={styles.taskCompleted}>Completed</Text>
                    <Text style={styles.counter}>2</Text>
                </View>
            </View>

            <ListOfTasks />
        </View>
    );
}
