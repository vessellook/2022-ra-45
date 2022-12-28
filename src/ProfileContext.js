import { createContext } from "react";

const ProfileContext = createContext({
  id: null,
  login: null,
  name: null,
  avatar: null,
});

export default ProfileContext;
