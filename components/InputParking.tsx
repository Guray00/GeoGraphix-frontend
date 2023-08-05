import { Text, TextInput, View } from "react-native";
import { themeStyles } from "../styleSheet/theme";
import React from "react";

interface InputParkingProps{
    onChange: (text: string) => void;
}
const InputParking: React.FC<InputParkingProps> = ({onChange}) => {
    return (
        <View
        style={{
            ...themeStyles.widthFull
        }}

    >
        <View
            style={{
                ...themeStyles.formTextbox,
                ...themeStyles.widthFull,
                borderRadius: 20,
                marginTop: 20,
            }}
        >
            <TextInput
                onChangeText={onChange}
                autoCorrect={false}
                autoComplete='off'
                spellCheck={false}
                maxLength={300}
                style={{
                    ...themeStyles.formTextboxInput,
                    ...themeStyles.themeLight,
                    borderWidth: 0,
                    height: 60
                }}
            />
            <Text
                style={{
                    ...themeStyles.formTextboxLabel,
                    ...themeStyles.formTextboxInputEnteredLabel
                }}
            >
                Search parking
            </Text>
        </View>
    </View>
    )
}

export default InputParking;