import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.gray[700],
        padding: 20
    }, 
    header: {
        paddingHorizontal: 100,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 10,
    },
    image:{
        flex: 1,
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    input:{
        flex: 1,
        height: 56,
        backgroundColor: colors.gray[500],
        borderRadius: 8,
        borderColor: colors.gray[700],
        color: colors.white,
        padding: 16,
        fontSize: 16,
        marginRight: 4
    },
    button:{
        padding: 18,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,        
    },
    taskInfoHeader:{
        width: '100%',
        flexDirection: 'row',
    },
    taskInfo:{
        width: '70%',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 12,
    },
    taskCreated:{
        fontWeight: 'bold',
        color: colors.blue,
        paddingRight: 10,
        fontSize: 14,
    },
    taskCompleted:{
        fontWeight: 'bold',
        color: colors.purple,
        paddingRight: 10,
        fontSize: 14,
    },
    counter: {
        color: colors.gray[200],
        backgroundColor: colors.gray[400],
        fontWeight: 'bold',
        height: 20,
        width: 25,
        paddingTop: 2,
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 12,
    }
})