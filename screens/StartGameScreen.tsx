import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        style={styles.numberInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#440525",
    elevation: 4, // (shadow) Android only
    shadowColor: "black", // (shadow) iOS only
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 70,
    width: "100%",
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
