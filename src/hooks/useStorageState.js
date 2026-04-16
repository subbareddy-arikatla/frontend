import React from 'react'
import { useEffect, useState } from 'react'

const useStorageState = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.get(key)
            return storedValue ? JSON.parse(storedValue) : defaultValue;

        } catch (error) {
            console.error('Error reading ', error)
            return defaultValue
        }
        useEffect(() => {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error('error saving storage', error);

            }
        }, [key, value])
        return [value,setValue]
    })
    return (
        <div>

        </div>
    )
}

export default useStorageState
