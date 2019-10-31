/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import HueContext from "../contexts/HueContext";

const labelCss = css`
  font-weight: bold;
  padding-right: 10px;
`;

// export default class BridgeForm extends React.Component {
//   constructor() {
//     super();
//     this.state = { bridgeIp: "192.168.0.100" };
//     this._handleChange = this._handleChange.bind(this);
//     this._handleClick = this._handleClick.bind(this);
//   }

//   _handleChange(e) {
//     this.setState({ bridgeIp: e.target.value });
//   }

//   _handleClick() {
//     this._addBridge({ ip: this.state.bridgeIp });
//   }

//   render() {
//     return (
//       <HueContext.Consumer>
//         {({ addBridge }) => {
//           this._addBridge = addBridge;

//           return (
//             <div>
//               <span css={labelCss}>Bridge IP</span>
//               <input
//                 type="text"
//                 value={this.state.bridgeIp}
//                 onChange={this._handleChange}
//               />
//               <button onClick={this._handleClick}>Connect</button>
//             </div>
//           );
//         }}
//       </HueContext.Consumer>
//     );
//   }
// }

export default class BridgeForm extends React.Component {
  constructor() {
    super();
    this.state = { bridgeIp: "192.168.0.100" };
    this._handleChange = this._handleChange.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleChange(e) {
    this.setState({ bridgeIp: e.target.value });
  }

  _handleClick() {
    alert(this.state.bridgeIp);
  }

  render() {
    return (
      <div>
        <span css={labelCss}>Bridge IP</span>
        <input
          type="text"
          value={this.state.bridgeIp}
          onChange={this._handleChange}
        />
        <button onClick={this._handleClick}>Connect</button>
      </div>
    );
  }
}
