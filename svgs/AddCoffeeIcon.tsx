import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const AddCoffeeIcon = (props) => (
    <Svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Rect width={32} height={32} rx={8} fill="#C67C4E" />
        <Path
            d="M12 16H20"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M16 20V12"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default AddCoffeeIcon;
