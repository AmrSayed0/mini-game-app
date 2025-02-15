import { Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

interface TitleProps {
  children?: string;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
  },
});
