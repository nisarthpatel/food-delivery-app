import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackButtonIcon = (props) => (
    <Svg
        width={31}
        height={26}
        viewBox="0 0 31 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12 2L2 13M2 13L12 24.5M2 13H29.5"
            stroke="black"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);
export default BackButtonIcon;
