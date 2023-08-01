import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import ingride from "../../assets/stories/ingride-removebg-preview.png"
import jay from "../../assets/stories/jay-removebg-preview.png"
import bertoni from "../../assets/stories/bertoni-removebg-preview.png"
import ceren from "../../assets/stories/ceren-removebg-preview.png"
import happy from "../../assets/stories/happy-removebg-preview.png"
import lana from "../../assets/stories/lana-removebg-preview.png"
import kali from "../../assets/stories/ceren-removebg-preview.png"
import maju from "../../assets/stories/maju-removebg-preview.png"
import netoicon from "../../assets/posts/postsHeader/neto-removebg-preview.png"
import lucasicon from "../../assets/posts/postsHeader/lucas-removebg-preview.png"
import upeicon from "../../assets/posts/postsHeader/hackupe-removebg-preview.png"
import neto from "../../assets/posts/neto-post.png"
import lucas from "../../assets/posts/lucas.png"
import upe from "../../assets/posts/hackupe.png"
import Heart from "../../assets/Heart.svg";
import image from "../../assets/image.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Stroke from "../../assets/stroke.svg";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: ingride,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: jay,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: bertoni,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: ceren,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: happy,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: kali,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: lana,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: maju,
  },
  
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
                <Image
                  style={styles.storesCardImage}
                  source={item.item.pathURL}
                />
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={netoicon}
              />
              <Text style={styles.contentHeaderLeftText}>neto_bat</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image style={{height:350}} source={neto} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                <Text style={{fontWeight:"bold"}}>neto_bat </Text>
                :)
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={lucasicon}
              />
              <Text style={styles.contentHeaderLeftText}>lucasilva_santos</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image style={{height:350}} source={lucas} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                <Text style={{fontWeight:"bold"}}>lucasilva_santos </Text>
                Nada como um dia após o outro...
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 11 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                5 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={upeicon}
              />
              <Text style={styles.contentHeaderLeftText}>hackaupe</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image style={{height:350}} source={upe} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                <Text style={{fontWeight:"bold"}}>hackaupe </Text>
                Visando a melhor experiência dos participantes foi necessária a
                mudança do nosso calendário. ... 

              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 2 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                10 hours ago See Translation
              </Text>
            </View>
          </View>
        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stores: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesCard: {
    borderRadius: 50,
    marginRight: 14,
  },
  storesCardImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    margin: 2,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
});