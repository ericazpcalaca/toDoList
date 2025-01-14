import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';

import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  taskDescription: string
  onRemove: ( ) => void;
}

export function Tasks({ taskDescription, onRemove }: Props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.checkPoint}>
        <Entypo name="circle" size={24} color={colors.blue.blue} />
      </TouchableOpacity>

      <Text style={styles.textTask}>
        {taskDescription}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <FontAwesome name="trash-o" size={18} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
}
