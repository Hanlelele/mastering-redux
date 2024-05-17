import { useContext } from "react";
import context from "../context";

export const useAppContext = () => { 
    return useContext(context);
}