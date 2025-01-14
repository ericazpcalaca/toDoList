import React, {useState} from 'react';
import { Text, View, FlatList, Image, Alert } from 'react-native';

import { styles } from './styles';
import { Tasks } from '../../components/Tasks';

export function ListOfTasks() {
    const [toDoList, setToDoList] = useState<string[]>([]);
    const [itemList, setItemList] = useState('');

    function handleTaskRemove(name: string){
    
        Alert.alert('Remove Task', `Do you wish to remove this task?`, [
        {
            text: 'Yes',
            onPress: () =>setToDoList(prevState => prevState.filter(itemList => itemList !== name))
        },
        {
            text: 'No',
            style: 'cancel'
        }
        ])
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data= {[]}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks
                        key={item}
                        taskDescription={item}
                        onRemove={() => handleTaskRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() =>
                    <View style={styles.emptyView}>
                        <View style = {styles.lineStyle} />
                        <Image source={require('../../assets/clipboard.png')} style={styles.imageEmptyList} />
                        <Text  style={styles.listEmptyTextHeader}>
                            Voce ainda nao tem tarefas cadastradas
                        </Text>
                        <Text  style={styles.listEmptyText}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>   
                }
            />                 
        </View>
    );
}
