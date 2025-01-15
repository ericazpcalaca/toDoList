import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: colors.gray[500],
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        padding: 12,
        marginBottom:5
    },
    textTask:{
        flex: 1,
        color: colors.gray[100],
        fontSize: 14,
        maxWidth: '80%',
        marginLeft: 8,
        marginRight: 8,
        lineHeight: 20,
    },
    doneTextTask:{
        flex: 1,
        color: colors.gray[300],
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    button:{
        width: 32,
        height: 32,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
})