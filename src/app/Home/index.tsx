import { 
    Text, 
    View, 
    Image,
    TextInput, 
    TouchableOpacity, 
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { styles } from './styles';
import { colors } from '../../styles/colors';

import { ListOfTasks } from '../../components/ListOfTasks';

export function Home() {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../assets/logo.png')} style={styles.image}/>
        </View>

        <View style={styles.form}>
            <TextInput 
                style={styles.input} 
                placeholder='Add new task'
                placeholderTextColor={colors.gray[300]}
                autoCorrect={false}
            />

            <TouchableOpacity style={styles.button}>
                <AntDesign name="pluscircleo" size={16} color={colors.white} />
            </TouchableOpacity>
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
