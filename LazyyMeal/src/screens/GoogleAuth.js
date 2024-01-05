import React, { useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const GoogleAuth = () => {
    const [signed, setSigned] = useState(false);
    const navigation = useNavigation();

    const _signin = async () => {
        try {
            await GoogleSignin.configure({
                androidClientId: '1031329850628-je3jdeifk6maobjujnsdul67ep32c6sm.apps.googleusercontent.com',
            });
            const hasPlayService = await GoogleSignin.hasPlayServices();
            if (hasPlayService) {
                const userInfo = await GoogleSignin.signIn();
                setSigned(true); // Set signed to true upon successful sign-in
                navigation.navigate('Home'); // Navigate to 'Home' screen
            }
        } catch (error) {
            console.log("ERROR IS: " + JSON.stringify(error));
        }
    };

    const signControl = async () => {
        const user = await GoogleSignin.isSignedIn();
        if (user != null) {
            setSigned(user); // Set signed to true if the user is signed in, otherwise false
        }
        else{
            setSigned(false);
        }
    };

    useEffect(() => {
        if (signed) {
            navigation.navigate('Home');
        }

        navigation.addListener('focus', () => {
            signControl();
        });
    }, [signed]);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../src/assets/signin_icon.png')} style={styles.icon} />
                <Text style={styles.title}>Lazy Meall</Text>
            </View>
            <Text style={styles.subtitle}>Google ile giriş yapmak için tıklayınız</Text>
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={_signin}
                style={styles.googleButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ecc71',
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 150,
        height: 150,
        marginBottom: 30,
        marginRight: 10,
    },
    title: {
        fontSize: 32,
        color: '#ecf0f1',
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#ecf0f1',
        marginBottom: 30,
    },
    googleButton: {
        marginTop: 20,
    },
});

export default GoogleAuth;
