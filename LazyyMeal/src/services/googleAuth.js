import { GoogleSignin } from "@react-native-google-signin/google-signin";

const _configureGoogleAuth = () => {
    GoogleSignin.configure({
        androidClientId: '1031329850628-je3jdeifk6maobjujnsdul67ep32c6sm.apps.googleusercontent.com',
    });
}

export const getUserMail = async () => {
    _configureGoogleAuth();
    const data = await GoogleSignin.getCurrentUser();
    var email;
    if (data != undefined && data != null) {
        email = data.user.email;
        return email;
    }

    return email;
}