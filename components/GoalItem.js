import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ itemData, onDeleteItem, id }) => {
  return (
    <Pressable
      onPress={onDeleteItem.bind(this, id)}
      android_ripple={{ color: "#dddddd" }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6, // not working on iOS if u use Text component
    //beacuse in the text component there is no borderRadius property
    backgroundColor: "#5e0acc",
    // color: "#ffffff", not working in the text in the view component because this css is
    // not a cascading style sheet
  },
  goalText: {
    color: "#ffffff",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
