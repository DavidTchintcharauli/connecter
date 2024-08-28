import { Head, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function CommentView({ auth, comment }) {

    const { data, setData, post, processing, errors } = useForm({
        comment_id: comment ? comment.id : '',
    });

    const handleTakeSuggest = (e) => {
        e.preventDefault();
        post(route('jobs.store'));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-4xl font-bold text-gray-900">Comment Details</h2>}
        >
            <Head title="Comment View" />

            <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded-lg border border-gray-300">
                    <div className="p-6 border-b border-gray-200">
                        {comment ? (
                            <>
                                <div className='flex justify-between'>
                                    <h3 className="text-4xl font-extrabold text-gray-900 mb-6">Comment Details</h3>
                                    <button 
                                        className='px-4 m-3  rounded-full bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out'
                                        onClick={handleTakeSuggest}    
                                    >
                                        Take Suggest
                                    </button>
                                </div>
                                <div className="bg-white shadow-md rounded-lg p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-gray-700">User Name:</span>
                                            <p className="text-gray-900">{comment.user_name}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-gray-700">Stars:</span>
                                            <p className="text-yellow-500">{comment.stars}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-gray-700">Offer Bids:</span>
                                            <p className="text-gray-900">{comment.offer_bids}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-semibold text-gray-700">Offer Money:</span>
                                            <p className="text-gray-900">${comment.offer_money}</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="flex flex-col">
                                            <div className="flex justify-between mb-4">
                                                <span className="text-lg font-semibold text-gray-700">Time to Start:</span>
                                                <p className="text-gray-900">{comment.time_need_to_start} {comment.time_unit_start}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex justify-between mb-4">
                                                <span className="text-lg font-semibold text-gray-700">Time to Start:</span>
                                                <p className="text-gray-900">{comment.time_need_to_start} {comment.time_unit_start}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg font-semibold text-gray-700 mb-2">Cover Letter:</p>
                                        <p className="text-gray-900 break-words">{comment.cover_letter}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="text-lg font-semibold text-gray-700">Job Success Ratio:</span>
                                        <p className="text-gray-900 ml-2">89%</p>
                                    </div>
                                </div>
                            </>

                        ) : (
                            <p className="text-gray-600">Comment not found.</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
