import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useId } from "react";
import { Text } from "react-native";
import { DarkTheme } from "@/constants/themes";

type CurrencyInputProps = {
    theme: typeof DarkTheme;
    label: string;
    value: string;
    onChange?: (value: string) => void;
    readOnly?: boolean;
};

const CurrencyInput = ({
    theme,
    label,
    value,
    onChange,
    readOnly = false
}: CurrencyInputProps) => {
    const currencyInputId = useId();

    const formatWithCommas = (value: string) => {
        const [integerPart, decimalPart] = value.split(".");
        const formattedInteger = integerPart.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return decimalPart === undefined
            ? formattedInteger
            : `${formattedInteger}.${decimalPart.replace(/\D/g, "").slice(0, 2)}`;
    }

    return (
        <FormControl sx={{ margin: 1, width: '25ch' }}>
            <InputLabel
                htmlFor={`currencyInput-${currencyInputId}`}
                sx={{
                    color: theme.colors.text,
                    "&.Mui-focused": { color: theme.colors.text },
                }}
            >
                {label}
            </InputLabel>
            <OutlinedInput
                id={`currencyInput-${currencyInputId}`}
                startAdornment={
                    <InputAdornment position="start">
                        <Text style={{ color: theme.colors.text }}>£</Text>
                    </InputAdornment>
                }
                label={label}
                value={formatWithCommas(value)}
                onChange={onChange ? (event) => onChange(event.target.value.replace(/\D/g, "")) : undefined}
                readOnly={readOnly}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                sx={{
                    color: theme.colors.text,
                    "& .MuiOutlinedInput-input": {
                        color: theme.colors.text,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.colors.text,
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0a84ff",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#0a84ff",
                    },
                }}
            />
        </FormControl>
    )
};

export default CurrencyInput;