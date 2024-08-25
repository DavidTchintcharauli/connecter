import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Footer from '@/Components/Footer';

export default function Comment({ auth, project }) {
    const { data, setData, post, errors } = useForm({
        project_id: project.id,
        employer_id: '',
        employed_id: '',
        offer_bids: '',
        offer_money: '',
        time_need_to_start: '',
        time_unit_start: '',
        time_need_to_done: '',
        time_unit_done: '',
        cover_letter: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/comment', {
            preserveScroll: true,
            onSuccess: () => {
                alert('Proposal submitted successfully!');
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Request Post</h2>}
        >
            <Head title="Comment" />

            <div className="py-12 max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className='space-y-8 bg-white p-8 rounded-xl shadow-lg'>
                    <div className='flex justify-between items-center border-b border-gray-200 pb-4 mb-6'>
                        <div className='text-xl font-semibold text-gray-800'>Job Details</div>
                        <div className='text-xl font-semibold text-green-600'>
                            Your Bids: <span className='font-bold'>100</span>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h2 className='text-3xl font-bold mb-2'>{project.project_name}</h2>
                        <p className='text-gray-700'>{project.project_description}</p>
                        <p className='text-sm text-gray-500'>Stars: 5</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col border border-gray-200 rounded-lg p-4'>
                            <label htmlFor="budget" className='font-medium text-gray-700'>Min Bids needed:</label>
                            <p className='text-green-600 text-lg font-bold'>{project.bids}</p>
                        </div>
                        <div className='flex flex-col border border-gray-200 rounded-lg p-4'>
                            <label htmlFor="offer_bids" className='font-medium text-gray-700'>Offer Bids:</label>
                            <input
                                type="number"
                                id='offer_bids'
                                value={data.offer_bids}
                                onChange={e => setData('offer_bids', e.target.value)}
                                className='mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                                min={project.bids}
                                max="100"
                            />
                            {errors.offer_bids && <div className='text-red-600 text-sm mt-2'>{errors.offer_bids}</div>}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col border border-gray-200 rounded-lg p-4'>
                            <label htmlFor="budget" className='font-medium text-gray-700'>Budget:</label>
                            <p className='text-gray-800 text-lg font-bold'>{project.budget}</p>
                        </div>
                        <div className='flex flex-col border border-gray-200 rounded-lg p-4'>
                            <label htmlFor="offer_money" className='font-medium text-gray-700'>Offer Money:</label>
                            <input
                                type="number"
                                id='offer_money'
                                value={data.offer_money}
                                onChange={e => setData('offer_money', e.target.value)}
                                className='mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                                min="0"
                            />
                            {errors.offer_money && <div className='text-red-600 text-sm mt-2'>{errors.offer_money}</div>}
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex flex-col border border-gray-200 rounded-lg p-4'>
                            <label htmlFor="time_need_to_start" className='font-medium text-gray-700'>Time Needed to Start:</label>
                            <input
                                type="number"
                                id='time_need_to_start'
                                value={data.time_need_to_start}
                                onChange={e => setData('time_need_to_start', e.target.value)}
                                className='mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                                min="0"
                                max="60"
                            />
                            <select
                                name="time_unit_start"
                                id="time_unit_start"
                                onChange={e => setData('time_unit_start', e.target.value)}
                                className='mt-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                            >
                                <option value="">Select time unit</option>
                                <option value="minutes">Minutes</option>
                                <option value="hours">Hours</option>
                            </select>
                            {errors.time_unit_start && <div className='text-red-600 text-sm mt-2'>{errors.time_unit_start}</div>}
                            {errors.time_need_to_start && <div className='text-red-600 text-sm mt-2'>{errors.time_need_to_start}</div>}
                        </div>
                        <div className='flex flex-col border border-gray-200 rounded-lg p-4'>
                            <label htmlFor="time_need_to_done" className='font-medium text-gray-700'>Time Needed to Done:</label>
                            <input
                                type="number"
                                id='time_need_to_done'
                                value={data.time_need_to_done}
                                onChange={e => setData('time_need_to_done', e.target.value)}
                                className='mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                                min="0"
                                max="60"
                            />
                            <select
                                name="time_unit_done"
                                id="time_unit_done"
                                onChange={e => setData('time_unit_done', e.target.value)}
                                className='mt-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                            >
                                <option value="">Select time unit</option>
                                <option value="minutes">Minutes</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                            </select>
                            {errors.time_need_to_done && <div className='text-red-600 text-sm mt-2'>{errors.time_need_to_done}</div>}
                            {errors.time_unit_done && <div className='text-red-600 text-sm mt-2'>{errors.time_unit_done}</div>}
                        </div>
                    </div>

                    <div className='border border-gray-200 rounded-lg p-4'>
                        <label htmlFor="cover_letter" className='block text-lg font-semibold text-gray-700 mb-2'>Cover Letter</label>
                        <textarea
                            name="cover_letter"
                            id="cover_letter"
                            value={data.cover_letter}
                            onChange={e => setData('cover_letter', e.target.value)}
                            className='w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
                            placeholder='Write your cover letter here...'
                        ></textarea>
                        {errors.cover_letter && <div className='text-red-600 text-sm mt-2'>{errors.cover_letter}</div>}
                    </div>

                    <div>
                        <button
                            type='submit'
                            className='w-full py-3 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500'
                        >
                            Submit Proposal
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
