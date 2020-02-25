export type State = {
  name: string;
  email: string;
  age: number;
  retired: boolean;
};

export type Action =
  | { type: "set value"; name: "name" | "email"; value: string }
  | { type: "set value"; name: "age"; value: number }
  | { type: "set value"; name: "retired"; value: boolean };

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set value":
      return { ...state, [action.name]: action.value };
    default:
      return state;
  }
}

export const initState: State = {
  name: "",
  email: "",
  age: 18,
  retired: false
};
