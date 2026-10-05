import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useId } from "react";
import { Text } from "react-native";
import { DarkTheme } from "@/constants/themes";

type PercentInputProps = {
    theme: typeof DarkTheme;
    label: string;
    value: string;
    onChange: (value: string) => void;
};

const PercentInput = ({
    theme,
    label,
    value,
    onChange
}: PercentInputProps) => {
    const currencyInputId = useId();

    const handleChange = (input: string) => {
        const cleaned = input.replace(/[^\d.]/g, "");
        const [integerPart, ...decimalParts] = cleaned.split(".");
        const decimalPart = decimalParts.join("").slice(0, 2);

        onChange(
            decimalParts.length > 0
                ? `${integerPart}.${decimalPart}`
                : integerPart
        );
    };

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
                endAdornment={
                    <InputAdornment position="end">
                        <Text style={{ color: theme.colors.text }}>%</Text>
                    </InputAdornment>
                }
                label={label}
                value={value}
                onChange={(event) => handleChange(event.target.value)}
                inputProps={{ inputMode: 'decimal' }}
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

export default PercentInput;