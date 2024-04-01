"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
function App() {
    return (<>
      <Todo title="hio there" description="asdg" done={false}/>
    </>);
}
function Todo(props) {
    return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
      </h2>
  </div>;
}
exports.default = App;
