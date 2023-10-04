import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import { Icon } from "../components";
import Toast from 'react-native-simple-toast'; // Import Toast

class NovaTela extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block flex center style={styles.padded}>
            <Block flex center style={{ zIndex: 2, gap: 40 }}>
              <Block style={styles.title}>
                <Block>
                  <Text color="white" size={30}>
                    Nova tela
                  </Text>
                </Block>
                <Block style={styles.subTitle}>
                  <Text center color="white" size={15}>
                    Aula 3
                  </Text>
                </Block>
              </Block>
              <Block center>
                <Button
                  style={styles.button}
                  color={argonTheme.COLORS.SECONDARY}
                  onPress={() => this.dispatchToast()}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Disparar Toast
                </Button>
                <Button
                  style={styles.button}
                  color={"yellow"}
                  onPress={() => navigation.navigate("Onboarding")}
                  textStyle={{ color: argonTheme.COLORS.BLACK }}
                >
                  Voltar
                </Button>
              </Block>
          </Block>
        </Block>
      </Block>
    );
  }

  dispatchToast() {
    Toast.show('Toast disparado!', Toast.LONG);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default NovaTela;
