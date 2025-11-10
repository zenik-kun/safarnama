import { Ionicons } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded, error] = useFonts({
        "Gabarito-Black": require("../assets/fonts/Gabarito-Black.ttf"),
        "Gabarito-Bold": require("../assets/fonts/Gabarito-Bold.ttf"),
        "Gabarito-ExtraBold": require("../assets/fonts/Gabarito-ExtraBold.ttf"),
        "Gabarito-Medium": require("../assets/fonts/Gabarito-Medium.ttf"),
        "Gabarito-Regular": require("../assets/fonts/Gabarito-Regular.ttf"),
        "Gabarito-SemiBold": require("../assets/fonts/Gabarito-SemiBold.ttf"),
        ...Ionicons.font,
    });

    useEffect(() => {
        if (error) throw error;

        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded, error]);

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <>
            {/**
             * Set a safe default StatusBar. Individual screens can override style as needed.
             * Using a light content with primary background prevents a black strip on Android.
             */}
            <StatusBar style="light" backgroundColor="#7c3aed" />
            <Stack>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false,
                }} />
                <Stack.Screen name="community/index" options={{
                    headerShown: false,
                    animation: "slide_from_right"
                }} />
                <Stack.Screen name="community/share" options={{
                    headerShown: false,
                    animation: "slide_from_bottom"
                }} />
                <Stack.Screen name="about" options={{
                    headerShown: false,
                    animation: "slide_from_right"
                }} />
                <Stack.Screen name="contact" options={{
                    headerShown: false,
                    animation: "slide_from_right"
                }} />
            </Stack>
        </>
    )
}
