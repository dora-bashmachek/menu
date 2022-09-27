import React from "react";
import {
  ScrollView,
  FlatList,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  SectionList
} from "react-native";

const pasta = `https://img.delo-vcusa.ru/2019/11/Pasta-po-toskanski.jpg`;
const lagman = `https://www.mir-krup.ru/upload/resize_cache/iblock/b8c/800_500_103c244ed8a995912e1bb5dccfb1e72b1/veglagman.jpg`;
const borcsh = `https://www.djurenko.com/wp-content/uploads/2009/10/ukrainskiy-borsch_14.jpg`;
const russiannarezka = `https://thumbs.dreamstime.com/b/%D1%82%D1%80%D0%B0-%D0%B8%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%B0%D1%8F-%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F-%D0%B7%D0%B0%D0%BA%D1%83%D1%81%D0%BA%D0%B0-80333602.jpg`;
const syrnyepalochki = `https://namnamra.com/public/r/2000-2100/2062.jpg`;
const fri = `https://static.1000.menu/img/content-v2/18/ca/14461/kartoshka-fri-na-skovorode_1581661860_11_max.jpg`;

function Element({ props }) {
  return (
    <View style={{ backgroundColor: "pink", padding: 20 }}>
      {/* <Text>{props.text}</Text> */}
      <Image source={{ Image }} style={{ width: 100, height: 100 }} />
      <Button title={props} />
    </View>
  );
}
function App() {
  const DATA = [
    {
      text: "горячие блюда",
      data: ["pasta", "lagman", "borcsh"]
    },
    { text: "zakuski", data: ["russian narezka", "syrnye palochki", "fri"] }
  ];
  return (
    <ScrollView>
      <View style={styles.app}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Element props={item} />}
          renderSectionHeader={({ section: { text } }) => (
            <Text style={styles.header}>{text}</Text>
          )}
        />
        {/* <FlatList data={["кнопка номер1","кнопка номер2","кнопка номер3"]} 
      renderItem={Element}
      keyExtractor={(item, index)=> index}/> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
