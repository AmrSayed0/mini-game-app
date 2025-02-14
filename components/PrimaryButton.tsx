import { View, Text, Pressable, StyleSheet } from "react-native";

interface PrimaryButtonProps {
  children: string;
}

function PrimaryButton({ children }: PrimaryButtonProps) {
  function handlePress() {
    console.log("Button pressed");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={handlePress}
        android_ripple={{ color: "#72063c" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#c22272b5",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  // for iOS
  pressed: {
    opacity: 0.75,
  },
});
