import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

interface InstructionTextProps {
  children: React.ReactNode;
  style: object;
}

function InstructionText({ children, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 20,
    fontFamily: "open-sans",
    color: Colors.accent500,
    textAlign: "center",
  },
});

export default InstructionText;
