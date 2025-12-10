import { useContext } from "react";
import UserContext from "./UserContext";

function Profile() {
  return <h1>Welcome {useContext(UserContext)}</h1>;
}

export default Profile;