const defaultUser = {
    id: "default-user",
    name: "Guest User",
    profilePicture: "",
    tasks: [],
    categories: [],
    deletedTasks: [],
    deletedCategories: [],
    favoriteCategories: [],
    settings: {
        darkMode: "system",
        sortBy: "dateCreated",
        readAloud: false,
        reduceMotion: false,
        showCompletedTasks: true,
    },
    lastSyncedAt: null,
};

export default defaultUser;