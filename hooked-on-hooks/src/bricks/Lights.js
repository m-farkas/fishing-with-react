import React from "react";
import HueContext from "../contexts/HueContext";
import LightList from "./LightList";

function transform(response) {
  return Object.keys(response).map(key => {
    let light = response[key];
    light.id = key;
    return light;
  });
}

export default class Lights extends React.Component {
  static contextType = HueContext;

  constructor() {
    super();
    this.state = { lights: [] };
  }

  componentDidMount() {
    if (this.context.status !== "ready") {
      return;
    }

    this.context.user.getLights().then(response => {
      const lights = transform(response);
      this.setState({ lights });
    });
  }

  componentDidUpdate() {
    if (this.context.status !== "ready") {
      return;
    }

    this.context.user.getLights().then(response => {
      const lights = transform(response);
      this.setState({ lights });
    });
  }
  render() {
    if (this.context.status === "connecting") {
      return "Connecting to bridge...";
    }

    return <LightList lights={this.state.lights} />;
  }
}

// function Lights() {
//   const hueContext = useContext(HueContext);
//   const [lights, dispatch] = useReducer(LightReducer, []);
//   const timerId = useRef(null);

//   useEffect(() => {
//     async function loadLights() {
//       if (hueContext.status !== "ready") {
//         return;
//       }

//       const response = await hueContext.user.getLights();

//       const newLights = Object.keys(response).map(key => {
//         let light = response[key];
//         light.id = key;
//         return light;
//       });

//       dispatch({ type: "reset", payload: newLights });
//     }

//     timerId.current = setInterval(loadLights, 1000);

//     loadLights();

//     return () => clearInterval(timerId.current);
//   }, [hueContext]);

//   function dispatchWrapper(dispatch) {
//     return action => {
//       const { payload } = action;

//       switch (action.type) {
//         case "toggleOn":
//           hueContext.user.setLightState(payload.light.id, {
//             on: payload.on
//           });
//           break;
//         case "setBrightness":
//           hueContext.user.setLightState(payload.light.id, {
//             bri: payload.bri
//           });
//           break;
//         case "setHue":
//           hueContext.user.setLightState(payload.light.id, { hue: payload.hue });
//           break;
//         case "setSaturation":
//           hueContext.user.setLightState(payload.light.id, { sat: payload.sat });
//           break;
//         case "setColor":
//           hueContext.user.setLightState(payload.light.id, payload.color);
//           break;
//         case "setEffect":
//           hueContext.user.setLightState(payload.light.id, {
//             effect: payload.effect
//           });
//           break;
//         default:
//           break;
//       }

//       dispatch(action);
//     };
//   }

//   if (hueContext.status === "connecting") {
//     return "Connecting to bridge...";
//   }

//   return <LightList lights={lights} onDispatch={dispatchWrapper(dispatch)} />;
// }

// export default Lights;
