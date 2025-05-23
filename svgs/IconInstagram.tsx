import * as React from "react";
import Svg, { Circle, Defs, G, Path } from "react-native-svg";
const SVGComponent = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={50}
        height={50}
        viewBox="0 0 256 256"
        xmlSpace="preserve"
        {...props}
    >
        <Defs />
        <G
            style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
            }}
            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
        >
            <Path
                d="M 56.335 21.996 H 33.666 c -6.434 0 -11.667 5.234 -11.667 11.667 v 22.669 C 21.998 62.767 27.232 68 33.666 68 h 22.669 c 6.434 0 11.668 -5.233 11.668 -11.667 V 33.664 C 68.003 27.23 62.769 21.996 56.335 21.996 z M 44.999 59.84 c -8.183 0 -14.839 -6.657 -14.839 -14.839 c 0 -8.183 6.657 -14.839 14.839 -14.839 c 8.182 0 14.839 6.657 14.839 14.839 C 59.838 53.183 53.181 59.84 44.999 59.84 z M 59.346 32.652 c -1.656 0 -2.999 -1.343 -2.999 -2.999 s 1.343 -2.999 2.999 -2.999 s 2.999 1.343 2.999 2.999 S 61.003 32.652 59.346 32.652 z"
                style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "#D76C82",
                    fillRule: "nonzero",
                    opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
            />
            <Circle
                cx={44.998999999999995}
                cy={44.998999999999995}
                r={10.839}
                style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "#D76C82",
                    fillRule: "nonzero",
                    opacity: 1,
                }}
                transform="  matrix(1 0 0 1 0 0) "
            />
            <Path
                d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 72.003 56.333 C 72.003 64.972 64.975 72 56.335 72 H 33.666 c -8.639 0 -15.667 -7.028 -15.667 -15.667 V 33.664 c 0 -8.639 7.028 -15.667 15.667 -15.667 h 22.669 c 8.64 0 15.668 7.028 15.668 15.667 V 56.333 z"
                style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "#D76C82",
                    fillRule: "nonzero",
                    opacity: 1,
                }}
                transform=" matrix(1 0 0 1 0 0) "
                strokeLinecap="round"
            />
        </G>
    </Svg>
);
export default SVGComponent;
