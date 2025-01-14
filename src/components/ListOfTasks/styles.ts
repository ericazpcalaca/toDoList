import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },    
    lineStyle:{
        borderWidth: 0.5,
        borderColor: colors.gray[300],
        width: '100%'
    }, 
    emptyView: {
        alignItems: 'center',
    },
    imageEmptyList: {
        alignContent: 'center',
        width: 56,
        height: 56,
        marginTop: 50
    },
    listEmptyTextHeader: {
        color: colors.gray[300],
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 15
    },
    listEmptyText: {
        color: colors.gray[300],
        fontSize: 14,
    },    
})