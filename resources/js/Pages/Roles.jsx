import React from "react"
import { useForm } from "@inertiajs/react"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Roles({ auth, roles }){
    const { data, setData, post, errors } = useForm({
        role_id: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/roles', {
            preserveScroll: true,
            onSuccess: () => {
                alert('Role selected successfully!');
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Select Your Role</h2>}
        >
            <Head title="Select Role" />

            <div className="py-12 max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-6">
                        <div className="text-xl font-semibold text-gray-800">Role Selection</div>
                    </div>

                    <div className="space-y-4">
                        <label htmlFor="role_id" className="block text-lg font-semibold text-gray-700 mb-2">Select a Role:</label>
                        <select
                            id="role_id"
                            value={data.role_id}
                            onChange={(e) => setData('role_id', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            <option value="">Select Role</option>
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>
                                    {role.role_name}
                                </option>
                            ))}
                        </select>
                        {errors.role_id && <div className="text-red-600 text-sm mt-2">{errors.role_id}</div>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Save Role
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}