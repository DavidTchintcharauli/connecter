import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import Footer from '@/Components/Footer';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export default function Dashboard({ auth }) {
    const { projects } = usePage().props;

    const timeAgo = (date) => {
        const now = new Date();
        const projectDate = new Date(date);
        return formatDistanceToNow(projectDate, { addSuffix: true, locale: enUS });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-lg rounded-xl border border-gray-200">
                    <div className="p-8 border-b border-gray-200">
                        <h3 className="text-3xl font-bold text-gray-800 mb-6">Projects</h3>
                        {projects.length ? (
                            projects.map(project => (
                                <Link
                                    href={route('projectView', project.id)}
                                    key={project.id}
                                    className="relative block bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
                                >
                                    <NavLink
                                        className="absolute top-4 right-4 text-blue-600 hover:text-blue-800 font-medium"
                                        href={route('comment', project.id)}
                                        active={route().current('comment')}
                                    >
                                        Make Proposal
                                    </NavLink>

                                    <div className="flex flex-col h-full">
                                        <div className="flex-1">
                                            <h4 className="text-2xl font-semibold text-gray-900">{project.project_name}</h4>
                                            <p className="text-sm text-gray-600 mt-1">Budget: <span className="font-medium text-gray-800">${project.budget}</span></p>
                                            <p className="text-gray-700 mt-2">{project.project_description}</p>
                                            <div className="mt-4 flex justify-between">
                                                <p className="text-sm text-gray-600">Bids: <span className="font-medium">{project.bids}</span></p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-4 right-4 text-sm text-gray-600">
                                            Posted: <span className="font-medium">{timeAgo(project.updated_at)}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p className="text-gray-600">No projects found.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
