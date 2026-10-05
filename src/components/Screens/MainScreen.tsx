import { DarkTheme } from "@/constants/themes";
import { useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";


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
        <View style={styles.container}>
            <Text>Savings Helper</Text>
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