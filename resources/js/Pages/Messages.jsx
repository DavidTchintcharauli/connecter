import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Messages({ auth, employees }) {
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const { data, setData, post, errors } = useForm({
        employer_id: auth.user.id,
        employed_id: selectedEmployeeId
    });

    const handleEmployeeClick = (employeeId) => {
        setSelectedEmployeeId(employeeId);
        setData('employed_id', employeeId);

        post('/conversations', {
            data: {
                employer_id: auth.user.id,
                employed_id: employeeId,
            },
            onSuccess: () => {
                alert('Conversation created successfully');
            },
            onError: (error) => {
                if (error.response?.status === 409) {
                    console.warn('Conversation already exists');
                } else if (error.response?.status === 422) {
                    console.warn('Validation error:', error.response?.data.errors);
                } else {
                    console.error('Failed to create conversation', error);
                }
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Messages</h2>}
        >
            <Head title="Messages" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex">
                                <div className="w-1/4 bg-orange-400 p-4">
                                    <input type="text" placeholder="Search" className="w-full p-2 mb-4 rounded" />
                                    <ul>
                                        {employees.map((employee) => (
                                            <li
                                                key={employee.id}
                                                className='border-b py-2 cursor-pointer'
                                                onClick={() => handleEmployeeClick(employee.id)}
                                            >
                                                {employee.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="w-3/4 bg-blue-100 p-4">
                                    <div className="bg-blue-200 p-4 rounded mb-2">
                                        <h2 className="text-center font-semibold">You are messaging with David T.</h2>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="self-start bg-gray-100 p-2 rounded mb-2 max-w-xs">Hello how are you?</div>
                                        <div className="self-end bg-blue-300 p-2 rounded mb-2 max-w-xs">Hello</div>
                                    </div>
                                    <div className="flex mt-4">
                                        <input type="text" placeholder="Hello there" className="flex-grow p-2 rounded-l" />
                                        <button className="bg-green-500 text-white p-2 rounded-r">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
