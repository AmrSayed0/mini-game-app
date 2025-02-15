import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./utils/colors";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  // Load custom fonts
  const [fontsLoading] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoading) {
    return <AppLoading />;
  }

  function handleStartGame(selectedNumber: number) {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  function handleGameOver(numberOfRounds: number) {
    setGameIsOver(true);
    setRoundsNumber(numberOfRounds);
  }

  let screen = <StartGameScreen onPickNumber={handleStartGame} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  function handleRestartGame() {
    setUserNumber(null);
    // setGameIsOver(true);
    setRoundsNumber(0);
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onRestart={handleRestartGame}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.primary800, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
