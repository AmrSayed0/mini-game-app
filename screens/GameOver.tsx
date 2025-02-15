import { StyleSheet, Text, View } from "react-native";

function GameOver() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});

export default GameOver;
