import { useContext } from "react";

import { AppContext } from "@src/contexts";

export const useApp = () => useContext(AppContext);
