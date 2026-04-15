import React from 'react'
import { useState } from 'react'

const StudentRegisterForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        village: '',

    })
    const [Error, setError] = useState({})
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }
    const validateForm = () => {
        const newError = {}
        if (!FormData, formData.firstname) {
            setError(newError)
            return Object.key(newError).length === 0
        }
    }
    const SubmitHandle = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log(errors)
            setError(errors)
        }


    }

    return (
        <div>
            <form onSubmit={SubmitHandle}>
                <div>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        placeholder="Username"
                        style={{ borderColor: Error.firstname ? 'red' : 'green' }}
                    />
                </div>
                <div>
                    <input type='text'
                        name='lastname'
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder='last name'
                        style={{ borderColor: Error.lastname ? 'red' : 'green' }}
                    />
                </div>
                <div>
                    <input type='text'
                        name='village'
                        value={formData.village}
                        onChange={handleChange}
                        placeholder='village'
                        style={{ borderColor: Error.lastname ? 'red' : 'green' }}
                    />
                </div>
                <div>
                    <input type='text'
                        name='age'
                        value={formData.age}
                        onChange={handleChange}
                        placeholder='age'
                        style={{ borderColor: Error.lastname ? 'red' : 'green' }}
                    />
                </div>
                <button type='submit'>submit</button>
            </form>

        </div>
    )
}

export default StudentRegisterForm
