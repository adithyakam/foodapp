import react, { createContext } from "react";

const userContext = createContext({
  name: "",
  setName: () => {},
});

export default userContext;
