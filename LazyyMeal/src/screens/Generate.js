import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, Pressable, Easing, StyleSheet, ScrollView } from "react-native";
import Layout from "../Layout";
import AntDesign from 'react-native-vector-icons/AntDesign';
import GenerateDrawerMenu from "../components/Generate/GenerateDrawerMenu";
import GenerateDrawerItem from "../components/Generate/GenerateDrawerItem";
import GenerateMenu from "../components/Generate/GenerateMenu";
import GenerateButton from "../components/Generate/GenerateButton";
const Generate = () => {
    useEffect(() => {
        // fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCeh3XQszWO6lLdKz_SZmm1Q&maxResults=50&order=date&key=AIzaSyBk1Bwbn1A-dakmipdDKFhcd6DW1Mkg1eM&fields=nextPageToken,pageInfo,items(id(videoId),snippet(title,description,channelTitle,thumbnails(high(url))))')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         data.items.forEach((item) => {
        //             const urlDescription = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBk1Bwbn1A-dakmipdDKFhcd6DW1Mkg1eM&part=snippet&id=" + item.id.videoId;
        //             fetch(urlDescription)
        //                 .then((res) => res.json())
        //                 .then((data) => {
        //                 });
        //         });
        //     });
    }, []);
    return (
        <Layout layoutTitle="Generate" generatePage={true}>
            {/* Json data will send from here */}

            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <GenerateMenu />
            <View style={{ paddingHorizontal: 16 }}>
                <GenerateButton />
            </View>
            {/* Component will call from here */}
        </Layout>
    )
}

export default Generate;
