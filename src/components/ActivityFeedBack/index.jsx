import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import Button from "../Button";
import colors from "../../styles/colors";

export default function ActivityFeedBack({ data }) {
  const [totalStars, setTotalStars] = useState(0);

  function stars(total) {
    return (
      <View style={styles.stars}>
        <AntDesign
          size={20}
          name={total >= 1 ? "star" : "staro"}
          onPress={() => setTotalStars(0)}
          color={total >= 1 ? colors.yellow : colors.heading}
        />
        <AntDesign
          size={20}
          name={total >= 2 ? "star" : "staro"}
          onPress={() => setTotalStars(1)}
          color={total >= 2 ? colors.yellow : colors.heading}
        />
        <AntDesign
          size={20}
          name={total >= 3 ? "star" : "staro"}
          onPress={() => setTotalStars(2)}
          color={total >= 3 ? colors.yellow : colors.heading}
        />
        <AntDesign
          size={20}
          name={total >= 4 ? "star" : "staro"}
          onPress={() => setTotalStars(3)}
          color={total >= 4 ? colors.yellow : colors.heading}
        />
        <AntDesign
          size={20}
          name={total >= 5 ? "star" : "staro"}
          onPress={() => setTotalStars(4)}
          color={total == 5 ? colors.yellow : colors.heading}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avalie a atividade</Text>
      <Text style={styles.text}>Nota da atividade</Text>
      {stars(Number(totalStars))}
      <Text style={styles.text}>Comentarios sobre a atividade</Text>
      <TextInput editable numberOfLines={1} style={styles.textsinput} />
      <View style={styles.button}>
        <Button name="Pronto" />
      </View>
    </View>
  );
}
