import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor: colors.gray[500],
        borderRadius: 8,
        flexDirection: 'row',
        alignItems:'center',
        paddingBottom: 6,
        paddingTop: 6,
        marginBottom:5
    },
    textTask:{
        flex: 1,
        color: colors.gray[100],
        fontSize: 14,
        maxWidth: '80%',
        marginLeft: 10,
        lineHeight: 20,
    },
    doneTextTask:{
        flex: 1,
        color: colors.gray[300],
        fontSize: 14,
        textDecorationLine: 'line-through'
    },
    button:{
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkPoint:{
        marginLeft: 10,
    },
})