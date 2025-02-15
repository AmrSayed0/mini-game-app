import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet, Animated } from "react-native";

interface BlinkingCursorInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  style?: object;
}

const BlinkingCursorInput: React.FC<BlinkingCursorInputProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
}) => {
  const [blinkAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [blinkAnim]);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
      />
      {value === "" && (
        <Animated.Text style={[styles.cursor, { opacity: blinkAnim }]}>
          |
        </Animated.Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
  },
  cursor: {
    fontSize: 32,
    color: "black",
  },
});

export default BlinkingCursorInput;
