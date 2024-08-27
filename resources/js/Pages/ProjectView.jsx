import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';

export default function ProjectView({ auth }) {
    const { project } = usePage().props;

    const timeAgo = (date) => {
        const now = new Date();
        const projectDate = new Date(date);
        return formatDistanceToNow(projectDate, { addSuffix: true, locale: enUS });
    };

    if (!project || !Array.isArray(project.comments)) {
        return (
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="text-4xl font-bold text-gray-900">Project Details</h2>}
            >
                <Head title="Project View" />
                <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg border border-gray-300">
                        <div className="p-6 border-b border-gray-200">
                            <p className="text-gray-600">Project or comments data is missing.</p>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-4xl font-bold text-gray-900">Project Details</h2>}
        >
            <Head title="Project View" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded-lg border border-gray-300">
                    <div className="p-6 border-b border-gray-200">
                        <h3 className="text-4xl font-extrabold text-gray-900 mb-4">{project.project_name}</h3>
                        <p className="text-lg text-gray-700 mb-4">{project.project_description}</p>
                        <div className="text-sm text-gray-600 mb-4">
                            <p className="mb-1">Budget: <span className="font-medium text-gray-900">${project.budget}</span></p>
                            <p>Posted: <span className="font-medium text-gray-900">{timeAgo(project.updated_at)}</span></p>
                        </div>

                        <h4 className="text-3xl font-semibold text-gray-900 mt-8 mb-4">Comments</h4>
                        {project.comments.length ? (
                            <ul className="space-y-4">
                                {project.comments.map(comment => (
                                    <Link
                                        href={route('commentView', comment.id)}
                                        key={comment.id}
                                        className="relative block bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-gray-50"
                                    >
                                        <li key={comment.id} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                            <p className="text-sm text-gray-600 mb-1">Offer Bids: <span className="font-medium text-gray-900">{comment.offer_bids}</span></p>
                                            <p className="text-sm text-gray-600 mb-1">Offer Money: <span className="font-medium text-gray-900">${comment.offer_money}</span></p>
                                            <p className="text-sm text-gray-600 mb-1">Time to Start: <span className="font-medium text-gray-900">{comment.time_need_to_start} {comment.time_unit_start}</span></p>
                                            <p className="text-sm text-gray-600 mb-1">Time to Complete: <span className="font-medium text-gray-900">{comment.time_need_to_done} {comment.time_unit_done}</span></p>
                                            <p className="text-sm text-gray-600 mb-1">Cover Letter: <span className="font-medium text-gray-900 break-words">{comment.cover_letter}</span></p>
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-600 mt-4">No comments yet.</p>
                        )}
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}
