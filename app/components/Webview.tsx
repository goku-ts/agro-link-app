import React, {
    FC, useEffect,
    useRef,
} from 'react';
import {
    StyleSheet, BackHandler,
    Platform,
} from "react-native"
import { WebView } from 'react-native-webview';





const Webview: FC = () => {

    const webViewRef : any = useRef(null);
    const onAndroidBackPress = () => {
        if (webViewRef.current) {
            webViewRef.current.goBack();
            return true; // prevent default behavior (exit app)
        }
        return false;
    };

    useEffect(() => {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
            return () => {
                BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
            };
        }
    }, []);
    return (
        <WebView
            style={styles.container}
            source={{ uri: 'https://google.com' }}
            ref={webViewRef}
        />
    );
}

export default Webview

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})