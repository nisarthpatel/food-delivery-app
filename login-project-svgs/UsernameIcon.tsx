import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const UsernameIcon = (props) => (
    <Svg
        width={35}
        height={35}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <Rect width={35} height={35} fill="url(#pattern0_0_84)" fillOpacity={0.5} />
        <Defs>
            <Pattern
                id="pattern0_0_84"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <Use xlinkHref="#image0_0_84" transform="scale(0.0111111)" />
            </Pattern>
            <Image
                id="image0_0_84"
                width={90}
                height={90}
                xlinkHref="data:image/png;base64,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"
            />
        </Defs>
    </Svg>
);
export default UsernameIcon;
