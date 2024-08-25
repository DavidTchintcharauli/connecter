import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function RequestPost({ auth }) {
    const { data, setData, post, errors } = useForm({
        project_name: '',
        project_description: '',
        start_time: '',
        end_time: '',
        budget: '',
        bids: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post('/requestPost', {
            preserveScroll: true,
            onSuccess: () => {
                alert('Proposal submitted successfully!');
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Request Post</h2>}
        >
            <Head title="RequestPost" />

            <div className="py-12 max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className='space-y-6 bg-white p-6 rounded-lg shadow-md'>
                    <div>
                        <label htmlFor="project_name" className='block text-sm font-medium text-gray-700'>
                            Project Name
                        </label>
                        <input
                            type="text"
                            id='project_name'
                            value={data.project_name}
                            onChange={e => setData('project_name', e.target.value)}
                            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-green-500 sm:text-sm'
                        />
                        {errors.project_name && <div className='text-red-600 text-sm mt-2'>{errors.project_name}</div>}
                    </div>
                    <div>
                        <label htmlFor="description" className='block text-sm font-medium text-gray-700'>
                            Project Description
                        </label>
                        <textarea
                            id="project_description"
                            value={data.project_description}
                            onChange={e => setData('project_description', e.target.value)}
                            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm-text-sm'
                        ></textarea>
                        {errors.description && <div className='text-red-600 text-sm mt-2'>{errors.description}</div>}
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                        <div>
                            <label htmlFor="start_time" className='block text-sm font-medium text-gray-700'>
                                Start Time
                            </label>
                            <input
                                type="datetime-local"
                                id='start_time'
                                value={data.start_time}
                                onChange={e => setData('start_time', e.target.value)}
                                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-ms focus:ring-green-500 focus:border-green-500 sm:text-sm'
                            />
                            {errors.start_time && <div className='text-red-600 text-sm mt-2'>{errors.start_time}</div>}
                        </div>
                        <div>
                            <label htmlFor="end_time" className='block text-sm font-medium text-gray-700'>
                                End Time
                            </label>
                            <input
                                type="datetime-local"
                                id='end-time'
                                value={data.end_time}
                                onChange={e => setData('end_time', e.target.value)}
                                className='mt1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green focus:border-green-500 sm:text-sm'
                            />
                            {errors.end_time && <div className='text-red-600 text-sm mt-2'>{errors.end_time}</div>}
                        </div>
                        <div>
                            <label htmlFor="budget" className='block text-sm font-medium text-gray-700'>
                                Budget
                            </label>
                            <input
                                type="number"
                                id='budget'
                                value={data.budget}
                                onChange={e => setData('budget', e.target.value)}
                                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm'
                                min="0"
                            />
                            {errors.budget && <div className='text-red-600 text-sm mt-2'>{errors.budget}</div>}
                        </div>
                        <div>
                            <label htmlFor="bids" className="block text-sm font-medium text-gray-700">
                                Number of Bids
                            </label>
                            <input
                                type="number"
                                id='bids'
                                value={data.bids}
                                onChange={e => setData('bids', e.target.value)}
                                className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm'
                                min="10"
                                max="50"
                            />
                            {errors.bids && <div className='text-red-600 text-sm mt-2'>{errors.bids}</div>}
                        </div>
                    </div>
                    <div className='text-right'>
                        <button
                            type='submit'
                            className='inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                        >
                            Submit a Proposal
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </AuthenticatedLayout>
    );
}
