import * as React from "react";
const { useContext } = React;
import { FormContext } from "./FormContext";

export function Form() {
  const { state, dispatch } = useContext(FormContext);

  return (
    <form>
      <div>
        <label>
          Name
          <input
            type="text"
            value={state.name}
            onChange={e =>
              dispatch({
                type: "set value",
                name: "name",
                value: e.target.value
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Email
          <input
            type="email"
            value={state.email}
            onChange={e =>
              dispatch({
                type: "set value",
                name: "email",
                value: e.target.value
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Age
          <input
            type="number"
            value={state.age}
            onChange={e =>
              dispatch({
                type: "set value",
                name: "age",
                value: Number(e.target.value)
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Retired
          <input
            type="checkbox"
            checked={state.retired}
            onChange={e =>
              dispatch({
                type: "set value",
                name: "retired",
                value: !state.retired
              })
            }
          />
        </label>
      </div>
    </form>
  );
}
