import { StyleSheet, Text, View, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useRef } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  // Prevent infinite recursion
  if (min >= max) return min;

  let rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
}

function GameScreen({ userNumber }: { userNumber: number }) {
  const minBoundary = useRef(1);
  const maxBoundary = useRef(100);

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction: "lower" | "greater") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return; // Prevent incorrect hints
    }

    if (direction === "lower") {
      // Adjust max boundary
      maxBoundary.current = currentGuess - 1;
    } else {
      // Adjust min boundary
      minBoundary.current = currentGuess + 1;
    }

    const newGuess = generateRandomBetween(
      minBoundary.current,
      maxBoundary.current,
      currentGuess
    );
    setCurrentGuess(newGuess);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(null, "lower")}>
            LOWER
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(null, "greater")}>
            GREATER
          </PrimaryButton>
        </View>
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 70,
  },
});

export default GameScreen;
