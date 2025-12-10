import { useContext } from "react";
import authcontext from "./AuthContext";

function LoginButton() {
    const {isauth, login , logout} = useContext(authcontext);

    return (
        <>
            {isauth ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={login}>Login</button>
            )}  
        </>
    );
}

export default LoginButton;