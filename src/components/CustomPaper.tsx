import { StyleSheet, Text } from "react-native";
import Paper from '@mui/material/Paper';
import { ReactNode, useMemo } from "react";
import { DarkTheme } from "@/constants/themes";

type CustomPaperProps = {
    theme: typeof DarkTheme;
    children: ReactNode;
};

const CustomPaper = ({
    theme,
    children
}: CustomPaperProps) => {
    const styles = useMemo(() => createStyles(theme), [theme]);

    return (
        <Paper style={styles.paper} elevation={10}>
            {children}
        </Paper>
    );
};

export default CustomPaper;

const createStyles = (theme: typeof DarkTheme) =>
    StyleSheet.create({
        paper: {
            padding: 20,
            marginTop: 20,
            width: '80%',
            height: '50%',
            backgroundColor: theme.colors.secondaryBackground,
        }
    });