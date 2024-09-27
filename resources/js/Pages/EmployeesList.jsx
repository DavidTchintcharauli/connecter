import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

export default function EmployeesList({ auth, employees = [], conversations = [] }) {
    const [loading, setLoading] = useState(false)
    const [selectedEmployedId, setSelectedEmployedId] = useState(null)
    const { data, setData, post, errors } = useForm({
        employed_id: ''
    })

    const handleEmployeeClick = async (employedId) => {
        setLoading(true)
        setData('employed_id', employedId)
        console.log("Selected employed ID:", employedId);
        console.log("Selector employer ID:", auth.user.id );

        try {
            const response = await post('/conversations', { 
                preserveScroll: true,
                onSuccess: () => {
                    alert('Conversation create or retrieved successfully!')
                }
             });
            const conversationId = response.props.conversation_id;

            window.location.href = `/messages/${conversationId}`;
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Employees list</h2>}
        >
            <Head title="EmployeesList" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">


                            <div className="flex">
                                <div className="w-1/4 bg-orange-400 p-4">
                                    <input type="text" placeholder="Search" className="w-full p-2 mb-4 rounded" />
                                    <ul>
                                        {employees.map((employee) => (
                                            <li key={employee.id} className='border-b py-2'>
                                                <button
                                                    onClick={() => handleEmployeeClick(employee.id)}
                                                    disabled={loading}
                                                >
                                                    {employee.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="w-3/4 bg-blue-100 p-4">
                                <div className="bg-blue-200 p-4 rounded mb-2">
                                    <h2 className="text-center font-semibold">Conversations</h2>
                                    <ul>
                                        {conversations.map((conversation) => (
                                            <li key={conversation.id} className="border-b py-2">
                                                Conversation between user {conversation.employer_id} and user {conversation.employed_id}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <div className="self-start bg-gray-100 p-2 rounded mb-2 max-w-xs">Hello how are you?</div>
                                    <div className="self-end bg-blue-300 p-2 rounded mb-2 max-w-xs">Hello</div>
                                </div>
                                <div className="flex mt-4">
                                    <input type="text" placeholder="Hello there" className="flex-grow p-2 rounded-l" />
                                    <button className="bg-green-500 text-white p-2 rounded-r">Send</button>
                                </div>
                                <div>
                                    {selectedEmployedId && (
                                        <div className="mt-4">
                                            <h3 className="font-semibold">Selected Employed User ID: {selectedEmployedId}</h3>
                                            <h3 className="font-semibold">Employer User ID: {auth.user.id}</h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
