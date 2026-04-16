export function createTask(data = {}) {
    return {
        id: data.id || crypto.randomUUID(),
        name: data.name || "",
        description: data.description || "",
        done: data.done || false,
        pinned: data.pinned || false,
        color: data.color || "default",
        date: data.date || new Date().toISOString(),
        deadline: data.deadline || null,
        category: data.category || [],
        lastSave: data.lastSave || Date.now(),
        sharedBy: data.sharedBy || null,
        position: data.position || null,
    }
}
