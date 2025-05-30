import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const ProfileIcon = (props) => (
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
      fill="url(#pattern0_0_258)"
      fillOpacity={0.5}
    />
    <Defs>
      <Pattern
        id="pattern0_0_258"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_0_258" transform="scale(0.0111111)" />
      </Pattern>
      <Image
        id="image0_0_258"
        width={90}
        height={90}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAADi0lEQVR4nO2cTUtVURSGH9MiBUsqJYhMy8I+iAbRxASptBo47MsaBP2A/kKTIJoFFSH9C0chRaFWGEVUphlC2aiENAujLG2wrmAXO7dz7tlr7+tZD7yj+7H2etl337PXWWeDYRiGYRiGYRhGoJT5HkABmoCjQAvQDGwBqnOvTQPjwAjQD9wBxjyMsWSpAM4CD4H5mBoAuoBy9VGXGMeAUeIbnK8RoEN57CVBFXCb4g3OVzdQqZhH0NQBT0nf5AU9AWrVsgmUOuRn7srkxUtJZs2uwu1MXmpmr1bJLDBcrMmFdEsls4DoQN/kBR1XyC8IKkjnEi6phsnIdfY5/Jm8oNPOswyAR/g3ut95lp5pwr/J88Ac0Og4179YoRkMKRCFQBnKW3Rto1uU40XRqhlM2+idyvGiaNYMpm30ZuV4UdRrBtM2urrwW9RYoxlM+w7LvHK8Qqjlrz2jM4sZrYS20T+V40XxQzOYttFfleNFMa0ZTNvoD8rxohjXDKZt9GvleFEMawbTNnpAOV4Uy7qCtw2pnIVQvWtwnKt3knQgpa0+51kGQBf+jT7pPMsAKEenl+NfGiIj9wwB2vFn9CGF/IKiG32Tb6pkFhiVSPeQlsmPyWinEkg/nMZ6PQxsUMopWGqBQdzO5Mw2OOZTifTFuViTM7tcRHEE+ZkXa/AQGby6iEs5cAapRcTZrs8hO75TBHhDI/SnshqRRpdWpFUh/6ms98ifaR/yVNY7D2M0DMMwDMMwDMMobULcGa4FdgF7gN3ADmAdUJN7rSb3vqlFmgTeIDWOV0j/iGonUiFCMHojUgA6DLQBW1P63jHgPnAXuAd8TOl7S4p9wFVk9mncXZkDXgBXgL0K+XmlHrgIPEPH3EJl1EvAdqcZK3MQ6CGMDqWlZnov0EkYy2hsVgEXgJf4N/N/9Rw4D6x04IcTOoG3+DcuqUaBEwQ8ww8gd0V8G5WWHgD7U3WoSCqQP5Zf+Dcnbf0GrhHActKA9Dz7NsS1BpEDA7zQhuzKfJugpUmUnx8nF/B7kQMvRc2geHDAemDCcUIhawKpvcQiSZ/wZaQukVWqEN96XQfyefBUKIr9dFmSi/IZ7LzPb8Q8qSFJ69SnBJ9ZbsQuuSYxuifBZ5YbKh5sAj7jf530pSkUT9JpB744TihETeKhHbgRuIFchcwmHHgpaDaX43Wkm9UwDMMwDMMwDMMwDCPz/AHwMcyzZEtWEAAAAABJRU5ErkJggg=="
      />
    </Defs>
  </Svg>
);
export default ProfileIcon;
