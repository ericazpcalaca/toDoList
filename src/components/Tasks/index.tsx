import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';

import { CheckPoint } from '../CheckPoint';

import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  taskDescription: string
  onRemove: ( ) => void;
}

export function Tasks({ taskDescription, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <CheckPoint />

      <Text style={styles.textTask}>
        {taskDescription}
      </Text>

      <Pressable
        onPress={onRemove}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? colors.gray[300] : colors.gray[500],
          },
          styles.button,
        ]}
      >
        {({ pressed }) => (
          <FontAwesome
            name="trash-o"
            size={18}
            color={pressed ? colors.red : colors.gray[300]}
          />
        )}
      </Pressable>
    </View>
  );
}