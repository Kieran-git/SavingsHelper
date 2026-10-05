import { DarkTheme } from "@/constants/themes";
import { useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import "@/../global.css";

type MainScreenProps = {
    theme: typeof DarkTheme;
    isDark: boolean;
    onToggleTheme: () => void;
};

const MainScreen = ({
    theme,
    isDark,
    onToggleTheme
}: MainScreenProps) => {
    const styles = useMemo(() => createStyles(theme), [theme]);


    return (
        <View className="flex-1 items-center justify-start p-10 w-full bg-[#22303c]"> 
            <Text className="text-4xl color-[#fff]">Savings Helper</Text>
        </View>
    )
};

export default MainScreen;

const createStyles = (theme: typeof DarkTheme) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            justifyContent: 'flex-start',
            padding: 10,
            width: '100%',
        },
        title: {
            color: theme.colors.text,
            fontSize: 64,
        },
    });