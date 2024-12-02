import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { useState } from 'react';

export default function Messages({ auth, conversations }) {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [messages, setMessages] = useState([]);
    const { data, setData, post, errors } = useForm({
        conversation_id: '',
        sender_id: auth.user.id,
        receiver_id: '',
        message_text: '',
    });

    const handleConversationClick = (conversation) => {
        setSelectedConversation(conversation);

        const receiverId = conversation.employer_id === auth.user.id ? conversation.employed_id : conversation.employer_id;

        setData({
            ...data,
            receiver_id: receiverId,
            conversation_id: conversation.id,
        });

        fetch(`/messages/${conversation.id}`)
            .then((response) => response.json())
            .then((messagesData) => {
                setMessages(messagesData);
            })
            .catch((error) => {
                console.error('Error fetching messages:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!data.receiver_id) {
            console.error('Receiver ID is not set');
            return;
        }

        const newMessage = {
            id: Date.now(),
            sender_id: auth.user.id,
            receiver_id: data.receiver_id,
            message_text: data.message_text,
        };
        setMessages([...messages, newMessage]);

        post('/messages', {
            preserveScroll: true,
            onSuccess: () => {
                setData('message_text', '');
            },
            onError: (errors) => {
                console.error('Submission errors:', errors);
                setMessages(messages.filter(msg => msg.id !== newMessage.id));
            }
        });
    };
    const checkForNewMessages = () => {
        if (!selectedConversation) return;

        fetch(`/messages/${selectedConversation.id}`)
            .then((response) => response.json())
            .then((messagesData) => {
                setMessages(messagesData);
            })
            .catch((error) => {
                console.error('Error fetching new messages:', error);
            });
    };

    const timeAgo = (date) => {
        const now = new Date()
        const messageDate = new Date(date)
        return formatDistanceToNow(messageDate, { addSuffix: true, locale: enUS })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Messages</h2>}
        >
            <Head title="Messages" />
            <div className="py-12">
                <div className="max-w-7xl grid grid-cols-4 gap-4 mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden col-span-1 shadow-sm sm:rounded-lg w-80 h-[750px]">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Your Conversations</h3>
                            <ul>
                                {conversations.map((conversation) => (
                                    <li key={conversation.id} className="border-b py-2">
                                        <a
                                            href={`/messages/${conversation.id}`}
                                            className="text-blue-600 hover:underline"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleConversationClick(conversation);
                                            }}
                                        >
                                            Conversation with {conversation.employer_id === auth.user.id ? conversation.employed.name : conversation.employer.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {selectedConversation && (
                            <div className="p-6 bg-gray-100 border-t border-gray-200">
                                <h4 className="font-semibold">Selected Conversation Details:</h4>
                                <p><strong>Conversation ID:</strong> {selectedConversation.id}</p>
                                <p><strong>Employer ID:</strong> {selectedConversation.employer_id}</p>
                                <p><strong>Employed ID:</strong> {selectedConversation.employed_id}</p>
                                <button onClick={checkForNewMessages} className="mt-4 bg-blue-500 text-white p-2 rounded">Check New Messages</button>
                            </div>
                        )}
                    </div>
                    {selectedConversation && (
                        <div className="col-span-3 sm:rounded-lg bg-blue-100 p-4">
                            <div className="bg-blue-200 p-4 flex justify-between rounded mb-2">
                                <h2 className="text-center font-semibold">Conversation with {selectedConversation.employer_id === auth.user.id ? selectedConversation.employed.name : selectedConversation.employer.name}</h2>
                                <h2 className="text-center font-semibold">Conversation ID: {selectedConversation.id}</h2>
                            </div>
                            <div className="h-[590px] overflow-y-scroll p-2">
                                {messages.map((msg) => (
                                    <div>
                                        <div key={msg.id} className="my-2">
                                            <div
                                                className={`p-2 rounded-full ${msg.sender_id === auth.user.id ? 'justify-end' : 'justify-start'} flex flex-col`}
                                            >
                                                <p className={`p-2 rounded-full ${msg.sender_id === auth.user.id ? 'bg-blue-300 pl-2 max-content self-end text-right max-w-max' : 'bg-gray-100 pr-10 text-left max-w-max'}`}>
                                                    {msg.sender_id === auth.user.id && (
                                                        <button onClick={() => handleDelete(msg.id)} className='mr-3 bg-red-500 text-white px-2 rounded-full '>
                                                            X
                                                        </button>
                                                    )}
                                                    {msg.message_text}
                                                </p>
                                                <span className={`text-sm text-gray-500 mt-1 ${msg.sender_id === auth.user.id ? 'self-end' : 'self-start'}`}>
                                                    {timeAgo(msg.created_at)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <form onSubmit={handleSubmit} className="flex mt-4 relative">
                                <input
                                    name="message_text"
                                    id="message_text"
                                    type="text"
                                    placeholder="Type your message here..."
                                    value={data.message_text}
                                    onChange={e => setData('message_text', e.target.value)}
                                    className="flex-grow border-none h-12 p-2 rounded-full pr-12"
                                    required
                                />
                                {errors.message_text && <div className='text-red-600 text-sm mt-2'>{errors.message_text}</div>}
                                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 p-2 rounded-full w-20 h-9 flex justify-center items-center">
                                    Send
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
