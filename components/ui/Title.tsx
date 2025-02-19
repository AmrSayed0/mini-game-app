import { Text, StyleSheet } from "react-native";

interface TitleProps {
  children?: string;
}

function Title({ children }: TitleProps) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    padding: 10,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,

    // sitting dynamic width
    maxWidth: "80%",
    width: 300,
  },
});
