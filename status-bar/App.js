import React, { useState } from 'react';
import { View, Button, StatusBar, StyleSheet } from 'react-native';

export default function App() {
  const [hidden, setHidden] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#007BFF"
        barStyle="dark-content"
        hidden={hidden}
        animated={true}
      />
      <Button
        title={hidden ? "Mostrar StatusBar" : "Ocultar StatusBar"}
        onPress={() => setHidden(!hidden)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
