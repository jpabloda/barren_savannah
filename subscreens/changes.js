import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const image = { uri: 'https://www.html.am/templates/downloads/bryantsmith/barrensavannah/mainImage.jpg' };

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function Changes() {

  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");

  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape")  
    } else {
      setMode("portrait")   
    }
   }

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange)
    return () => {
      Dimensions.removeEventListener("change", onChange),
     modeMaker();
    };

  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['orange', 'black']} style={styles.background} imageStyle={{
              resizeMode: 'stretch'
            }}>
        <View style={styles.nav}>      
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Home</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>About</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Portfolio</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Services</Text>
            </View>
            <View style={mode === "portrait" ? styles.navButton : styles.navHorizontal}>
              <Text style={mode === "portrait" ? styles.navText : styles.navHtext}>Contact</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.contentWrapper}>
          <ScrollView>
            {mode === "portrait"
            ?
                <View style={styles.headerBorder}>
                    <ImageBackground source={image} style={styles.image}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Barren Savannah</Text>
                        <Text style={styles.subtitle}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
                    </View>
                    </ImageBackground>
                </View>
            :
                <View style={styles.headerBorder}>
                    <View style={styles.header}>
                        <Text style={styles.titleH}>Barren Savannah</Text>
                        <Text style={styles.subtitleH}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
                    </View>
                </View>
            }
            <View style={styles.textBorder}>
              <View style={mode === "portrait" ? styles.textContent : styles.textContentH}>
                <View style={styles.paragraph}>
                  <Text style={styles.hTitle}>The Title of an Article</Text>
                  <Text style={styles.hText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) This is what a link looks like.

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.</Text>
                  <View style={styles.dots}>
                    <Text>This is a block quote, use it to include quotes from yourself or others. All you have to do to include this element is wrap some text around blockquote tags</Text>
                  </View>
                </View>

                <View style={styles.paragraph}>
                  <Text style={styles.hTitle}>Titles are H1 Tags</Text>
                  <Text style={styles.hText}>Since the titles are H1 tags, try to include your keywords in them as search engines will look at them as being important content.

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.

                  Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
                </View>

                <View style={styles.paragraph}>
                  <Text style={styles.hTitle}>Yet Another One!</Text>
                  <Text style={styles.hText}>You may use this template on any site, anywhere, for free just please leave the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :)

                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula pellentesque quam.

                  Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    bottom: 0,
    width: '100%'
  },
  navButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    height: 80
  },
  navHorizontal: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 40,
    paddingRight: 40,
    height: 80
  },
  navText: {
    color: "black",
    fontWeight: "700",
    fontSize: 14,
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
  },
  navHtext: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18
  },
  image: {
    height: 250
  },
  contentWrapper: {
    flex: 0.9,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10
  },
  headerBorder: {
    backgroundColor: '#000',
    padding: 15
  },
  header: {
    padding: 10
  },
  title: {
    color: '#fff',
    fontSize: 30
  },
  titleH: {
    color: '#fff',
    fontSize: 70,
    fontWeight: '700'
  },
  subtitleH: {
      color: '#fff'
  },
  textBorder: {
    backgroundColor: '#000',
    padding: 15,
    marginTop: 20
  },
  textContent: {
    backgroundColor: '#fff',
    padding: 10
  },
  textContentH: {
    backgroundColor: 'white',
    padding: 60
  },
  dots: {
    padding: 20,
    marginBottom: 20,
    borderColor: '#C87002',
    borderWidth: 1,
    borderStyle: 'dashed'
  },
  hTitle: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10
  },
  hText: {
    lineHeight: 20,
    marginBottom: 20
  },

});