import { DarkTheme } from "@/constants/themes";
import { useEffect, useMemo, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomPaper from "../CustomPaper";
import CurrencyInput from "../CurrencyInput";
import CustomSlider from "../CustomSlider";
import PercentInput from "../PercentInput";
import calculateProjection, { ProjectionResults } from "@/services/calculateProjection";

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
    const [yearRange, setYearRange] = useState<number>(1);
    const [investmentAmount, setInvestmentAmount] = useState("");
    const [monthlyContribution, setMonthlyContribution] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [results, setResults] = useState<ProjectionResults>({
        monthlyInterest: "0.00",
        yearlyInterest: "0.00",
        totalInterest: "0.00",
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setResults(calculateProjection(
                investmentAmount,
                monthlyContribution || "0",
                interestRate,
                yearRange
            ));
        }, 300);

        return () => clearTimeout(timeout);
    }, [investmentAmount, monthlyContribution, interestRate, yearRange]);

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Savings Helper</Text> */}

            <CustomPaper theme={theme}>
                <Text>Savings Helper</Text>

                <View style={styles.innerContainer}>
                    <CurrencyInput theme={theme} label="Investment Amount" value={investmentAmount} onChange={setInvestmentAmount} />
                    <CurrencyInput theme={theme} label="Monthly Contribution" value={monthlyContribution} onChange={setMonthlyContribution} />
                    <PercentInput theme={theme} label="Interest Rate" value={interestRate} onChange={setInterestRate} />
                    <CustomSlider  theme={theme} label="Years" value={yearRange} onChange={setYearRange} />
                </View>

                <View style={styles.innerContainer}>
                    <CurrencyInput theme={theme} label="Monthly Interest" value={results.monthlyInterest} readOnly />
                    <CurrencyInput theme={theme} label="Yearly Interest" value={results.yearlyInterest} readOnly />
                    <CurrencyInput theme={theme} label="Total Interest" value={results.totalInterest} readOnly />
                </View>

                <View>
                    {/* Graph showing projection over selected years */}
                </View>

            </CustomPaper>
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
        innerContainer: {
            flexDirection: 'row', 
            justifyContent: 'flex-start', 
            alignItems: 'center'
        }
    });