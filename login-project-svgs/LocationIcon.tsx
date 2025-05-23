import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const LocationIcon = (props) => (
  <Svg
    width={35}
    height={35}
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect
      width={35}
      height={35}
      fill="url(#pattern0_0_265)"
      fillOpacity={0.5}
    />
    <Defs>
      <Pattern
        id="pattern0_0_265"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_0_265" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_0_265"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default LocationIcon;
