import { useState } from "react";
import { TaskContext } from "./TaskContext";

export default function TaskProvider({ children }) {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("dateCreated");

  return (
    <TaskContext.Provider
      value={{
        selectedTaskId,
        setSelectedTaskId,
        searchText,
        setSearchText,
        sortBy,
        setSortBy,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}