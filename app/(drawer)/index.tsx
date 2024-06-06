import { ImageBackground, Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000",
      }}
    >
      <ImageBackground
        source={require("../../assets/images/HomeBackground.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/Fish.png")}
            style={styles.image}
          />
          <Text style={styles.imgText}>
            Ajude a reconhecer{" "}
            <Text style={{ fontWeight: "800" }}>
              espécies marinhas em extinção
            </Text>
          </Text>
          <Text style={styles.imgSubText}>com apenas uma foto.</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.highlight} >
          <Text style={styles.highlightText}>Por que contribuir ?</Text>
        </View>
        <Text style={styles.desc} >
          Com um simples "clique", você nos ajuda a monitorar as espécies
          marinhas ameaçadas de extinção, contribuindo para que a pesca se torne
          cada vez mais sustentável.
        </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imageContainer: {
    paddingTop: 110,
  },
  image: {
    height: 380,
    width: 350,
    alignSelf: "center",
    borderRadius: 35,
  },
  imgText: {
    fontFamily: "Poppins-Regular",
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 50,
    position: "absolute",
    top: 420,
  },
  imgSubText: {
    fontFamily: "Poppins-Regular",
    fontSize: 28,
    color: "#3AFFFF",
    textAlign: "center",
  },
  line: {
    width: 1,
    height: 60,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginVertical: 20,
  },
  highlight:{
    borderColor: "#3AFFFF",
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 35
  },
  highlightText:{
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#3AFFFF",
    textAlign: "center"
  },
  desc:{
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    marginHorizontal: 65,
    marginTop: 15
  }
});
