import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Dashboard({ auth }) {
    const { projects } = usePage().props

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                    <div className='p-6 bg-white border-b border-gray-200'>
                        <h3 className='text-xl font-semibold mb-4'>Projects</h3>
                        {projects.length ? (
                            projects.map(project => (
                                <div key={project.id} className='border border-gray-300 p-4 rounded-lg mt-4'>
                                    <h4 className='text-lg font-bold'>{project.project_name}</h4>
                                    <p className='text-sm text-gray-500 mb-2'>Budget: ${project.budget}</p>
                                    <p className='mb-2'>{project.project_description}</p>
                                    <p className='text-sm text-gray-500'>Bids:{project.bids}</p>
                                </div>
                            ))
                        ) : (
                            <p>No projects found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
