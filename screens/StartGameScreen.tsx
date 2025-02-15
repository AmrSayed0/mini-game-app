import { StyleSheet, TextInput, View, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../utils/colors";
import BlinkingCursorInput from "../components/BlinkingCursorInput";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

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
    <View style={styles.rootContainer}>
      <Title>Guess a number</Title>
      <Card>
        <InstructionText style={styles.instructionText}>
          Enter a number
        </InstructionText>
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
      </Card>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
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
  instructionText: {
    fontSize: 24,
    color: Colors.primary500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
