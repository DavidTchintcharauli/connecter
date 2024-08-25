import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function ProjectView({ auth, project }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Notifications</h2>}
        >
            <Head title="ProjectView" />

            <div className="py-12 ">
                <div className="max-w-7xl p-5 bg-sky-400 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">{project.id}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}