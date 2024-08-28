import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function EmployeesList({ auth, employees }) {
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

                            <div class="flex">
                                <div class="w-1/4 bg-orange-400 p-4">
                                    <input type="text" placeholder="Search" class="w-full p-2 mb-4 rounded" />
                                    {employees.map((employee) => (
                                        <li key={employee.id} className='border-b py-2'>
                                            {employee.name}
                                        </li>
                                    ))}
                                </div>

                                <div class="w-3/4 bg-blue-100 p-4">
                                    <div class="bg-blue-200 p-4 rounded mb-2">
                                        <h2 class="text-center font-semibold">You are messaging with David T.</h2>
                                    </div>
                                    <div class="flex flex-col">
                                        <div class="self-start bg-gray-100 p-2 rounded mb-2 max-w-xs">Hello how are you?</div>
                                        <div class="self-end bg-blue-300 p-2 rounded mb-2 max-w-xs">Hello</div>
                                    </div>
                                    <div class="flex mt-4">
                                        <input type="text" placeholder="Hello there" class="flex-grow p-2 rounded-l" />
                                        <button class="bg-green-500 text-white p-2 rounded-r">Send</button>
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
