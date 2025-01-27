import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';
import { colors } from '../../styles/colors';

type CheckPointProps = {
  onPress: () => void; 
};

export function CheckPoint({ onPress }: CheckPointProps) {
  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked((prev) => !prev); 
    onPress(); 
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.checkPoint,
        pressed,
      ]}
    >
      {({ pressed }) => (
        <FontAwesome
          name={checked ? 'check-circle' : 'circle-o'}
          size={24}
          color={
            !checked
              ? pressed
                ? colors.blueDark // Unchecked and hovered
                : colors.blue // Unchecked
              : pressed
              ? colors.purple // Checked and hovered
              : colors.purpleDark // Checked
          }
        />
      )}
    </Pressable>
  );
}
