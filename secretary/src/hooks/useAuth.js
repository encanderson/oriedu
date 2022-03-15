import { useContext } from "react";

// auth provider
import { AuthContext } from "@src/contexts";

//-----------------------|| AUTH HOOKS ||-----------------------//

const useAuth = () => useContext(AuthContext);

export default useAuth;
