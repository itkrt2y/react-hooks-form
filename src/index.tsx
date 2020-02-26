import * as React from "react";
const { useReducer } = React;
import { render } from "react-dom";
import { Form } from "./Form";
import { reducer, initState } from "./store";
import { FormContext } from "./contexts";

export function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  console.log(state);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <h1>My Form</h1>
      <Form />
    </FormContext.Provider>
  );
}

render(React.createElement(App), document.querySelector("#app"));
