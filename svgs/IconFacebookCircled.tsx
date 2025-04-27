// icon:facebook-circled | Entypo http://entypo.com/ | Daniel Bruce
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconFacebookCircled(props) {
  return (
    <Svg
      viewBox="0 0 960 1000"
      fill="#D76C82"
      height="50"
      width="50"
      {...props}>
      <Path d="M480 20c133.333 0 246.667 46.667 340 140s140 206.667 140 340c0 132-46.667 245-140 339S613.333 980 480 980s-246.667-47-340-141S0 632 0 500c0-133.333 46.667-246.667 140-340S346.667 20 480 20m114 330v-78h-72c-29.333 0-54 11-74 33s-30 49-30 81v44h-76v74h76v222h86V504h90v-74h-90v-52c0-18.667 6-28 18-28h72" />
    </Svg>
  );
}

export default IconFacebookCircled;
