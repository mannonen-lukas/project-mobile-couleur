import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <View style={{ flex: 3, backgroundColor: "green" }} />
      <View style={{ flex: 2, backgroundColor: "red" }} />
      <View style={{ flex: 1, backgroundColor: "blue" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Flex;