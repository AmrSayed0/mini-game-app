import { View, StyleSheet, Text, Dimensions } from "react-native";
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

// Using Dimensions API to get the device width
// and adjust the padding accordingly
const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: deviceWidth < 400 ? 12 : 24,
    margin: deviceWidth < 400 ? 12 : 24,
    borderRadius: 10,
    marginVertical: 24,
    marginHorizontal: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 400 ? 16 : 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});

export default NumberContainer;
