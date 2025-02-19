import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

interface GameOverProps {
  roundsNumber: number;
  userNumber: number;
  onRestart: () => void;
}

function GameOver({ roundsNumber, userNumber, onRestart }: GameOverProps) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.Highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.Highlight}>{userNumber}.</Text>
      </Text>
      <PrimaryButton onPress={onRestart}>START NEW GAME</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWidth < 400 ? 150 : 250,
    height: deviceWidth < 400 ? 150 : 250,
    borderRadius: (deviceWidth < 400 ? 150 : 250) / 2,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  Highlight: {
    color: Colors.primary500,
    fontFamily: "open-sans-bold",
  },
});

export default GameOver;
