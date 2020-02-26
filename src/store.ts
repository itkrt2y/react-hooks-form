export type State = {
  name: string;
  email: string;
  age: number;
  retired: boolean;
};

export type Action = {
  type: "set state";
  value: { name?: string; email?: string; age?: number; retired?: boolean };
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set state":
      return { ...state, ...action.value };
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
