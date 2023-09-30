import react, { createContext } from "react";

const userContext = createContext({
  name: "ak",
  setUser: (value) => {
    this.name = value;
  },
});

export default userContext;
