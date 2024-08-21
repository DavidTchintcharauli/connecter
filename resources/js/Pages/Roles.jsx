import React from "react"
import { useForm } from "@inertiajs/react"

export default function Roles({ roles }){
    const { data, setData, post } = useForm({
        role_id: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/roles')
    }

    return(
        <div>
            <h1>Select Your Role</h1>
            <form onSubmit={handleSubmit}>
                <select 
                    value={data.role_id}
                    onChange={(e) => setData('role_id', e.target.value)}
                >
                    <option value="">Select Role</option>
                    {roles.map(role => (
                        <option key={role.id} value={role.id}>
                            {role.role_name}
                        </option>
                    ))}
                </select>
                <button type="submit">Save Role</button>
            </form>
        </div>
    )
}