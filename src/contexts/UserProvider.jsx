import { UserContext } from "./UserContext";
import useStorageState from "../hooks/useStorageState";
import defaultUser from "../constants/defaultUser";
import { STORAGE_KEYS } from "../constants/storageKeys";

export default function UserProvider({ children }) {
    const [user, setUser] = useStorageState(STORAGE_KEYS.USER, defaultUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}