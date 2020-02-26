import * as React from "react";
const { useContext } = React;
import { FormContext } from "./contexts";

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
              dispatch({ type: "set state", value: { name: e.target.value } })
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
              dispatch({ type: "set state", value: { email: e.target.value } })
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
                type: "set state",
                value: { age: Number(e.target.value) }
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
                type: "set state",
                value: { retired: !state.retired }
              })
            }
          />
        </label>
      </div>
    </form>
  );
}
