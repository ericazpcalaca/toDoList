import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';

import { CheckPoint } from '../CheckPoint';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  taskDescription: string;
  completed: boolean;
  onRemove: () => void;
  onToggleCompletion: () => void; 
};

export function Tasks({ taskDescription, completed, onRemove, onToggleCompletion }: Props) {
  return (
    <View style={styles.container}>
      <CheckPoint onPress={onToggleCompletion} />

      <Text
        style={[
          styles.textTask,
          completed && { textDecorationLine: 'line-through', color: colors.gray[300] },
        ]}
      >
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
