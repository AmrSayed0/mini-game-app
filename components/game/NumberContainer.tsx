import { View, StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

interface NumberContainerProps {
  children: React.ReactNode;
}

function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 16,
    borderRadius: 10,
    marginVertical: 24,
    marginHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
