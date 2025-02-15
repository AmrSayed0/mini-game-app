import { StyleSheet, View } from "react-native";
import Colors from "../../utils/colors";

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
});

export default Card;
