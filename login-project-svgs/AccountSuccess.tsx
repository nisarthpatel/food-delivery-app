import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const AccountSuccess = (props) => (
    <Svg
        width={148}
        height={148}
        viewBox="0 0 148 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Circle cx={74} cy={74} r={71.5} stroke="#FF045F" strokeWidth={5} />
        <Path
            d="M41 74.6452L68.5502 104L111 52"
            stroke="#FF045F"
            strokeWidth={10}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default AccountSuccess;
