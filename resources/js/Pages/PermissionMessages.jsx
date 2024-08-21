import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function PermissionMessages({ auth }) {
    const { error } = usePage().props;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-900 leading-tight">Permission Messages</h2>}
        >
            <Head title="Permission Messages" />

            <div className="p-12">
                <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm mx-auto text-center">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Access Denied</h2>
                        <p className="text-gray-600 mb-6">
                            You do not have permission to access this page.
                        </p>
                        {error && (
                            <p className="text-red-500 mb-6">
                                {error}
                            </p>
                        )}
                        <button
                            onClick={() => window.history.back()}
                            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
