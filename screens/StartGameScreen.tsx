import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/colors";
import BlinkingCursorInput from "../components/BlinkingCursorInput";

interface StartGameScreenProps {
  onPickNumber: (selectedNumber: number) => void;
}

function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleNumberInput(text: string) {
    setEnteredNumber(text);
  }

  function resetInput() {
    setEnteredNumber("");
  }

  function confirmInput() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    onPickNumber(chosenNumber);
    // setConfirmed(true);
    // setSelectedNumber(chosenNumber);
    // setEnteredNumber("");
  }

  return (
    <View style={styles.container}>
      {/* <BlinkingCursorInput
        value={enteredNumber}
        onChangeText={handleNumberInput}
        placeholder="Enter a number"
        style={styles.numberInput}
      /> */}
      <TextInput
        maxLength={2}
        keyboardType="number-pad"
        style={styles.numberInput}
        // placeholder="Enter a number"
        onChangeText={handleNumberInput}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
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
    backgroundColor: Colors.primary700,
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
    color: Colors.accent500,
    textAlign: "center",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 4,
    marginVertical: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
