import React from "react";
import { View, StyleSheet, Text } from "react-native";



export function Produto( ) {
    return (
        <View style={styles.center}>
        <Text>This is the produto screen</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });
  
  
  