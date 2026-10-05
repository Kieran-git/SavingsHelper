import { DarkTheme } from "@/constants/themes";
import Slider from "@mui/material/Slider";
import { Text, View } from "react-native";

type CustomSliderProps = {
    theme: typeof DarkTheme;
    label: string;
    value: number;
    onChange: (value: number) => void;
};

const CustomSlider = ({
    theme,
    label,
    value,
    onChange
}: CustomSliderProps) => {

    return (
        <View style={{width: '20%', flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{ color: theme.colors.text, marginRight: 20 }}>
                {label}:
            </Text>
            
            <Slider
                value={value}
                onChange={(_, value) =>
                    onChange(value as number)
                }
                valueLabelDisplay="auto"
                min={1}
                max={30}
                defaultValue={1}
                disableSwap
            />
            <Text style={{ color: theme.colors.text, marginLeft: 20 }}>
                {value}
            </Text>
        </View>
    );
};

export default CustomSlider;