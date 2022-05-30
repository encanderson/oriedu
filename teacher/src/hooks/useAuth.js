import { useContext } from "react";

// auth provider
import { AuthContext } from "@src/contexts";

//-----------------------|| AUTH HOOKS ||-----------------------//

export const useAuth = () => useContext(AuthContext);

export default useAuth;
