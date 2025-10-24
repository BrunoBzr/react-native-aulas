import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1c70f8ff"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <Text>Barras de status</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});
