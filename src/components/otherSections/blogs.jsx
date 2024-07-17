import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Promoting Health and Wellness in Communities',
        category: { name: 'Article', color: 'bg-indigo-100 text-indigo-800' },
        description:
            'Discover how our NGO is working to improve health and wellness through various initiatives and programs.',
        date: 'Jul 1, 2024',
        datetime: '2024-07-01',
        author: {
            name: 'Dr. Jane Doe',
            imageUrl:
                'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '5 min',
    },
    {
        id: 2,
        title: 'Educational Outreach: Changing Lives One Child at a Time',
        category: { name: 'Video', color: 'bg-pink-100 text-pink-800' },
        description:
            'Watch our latest video on how educational outreach programs are making a significant impact in underprivileged communities.',
        date: 'Jun 20, 2024',
        datetime: '2024-06-20',
        author: {
            name: 'John Smith',
            imageUrl:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '3 min',
    },
    {
        id: 3,
        title: 'Environmental Initiatives: Building a Sustainable Future',
        category: { name: 'Case Study', color: 'bg-green-100 text-green-800' },
        description:
            'Learn about our successful environmental cleanup drives and how you can participate in future events.',
        date: 'May 15, 2024',
        datetime: '2024-05-15',
        author: {
            name: 'Emily Green',
            imageUrl:
                'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        readingTime: '8 min',
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Blogs() {
    return (
        <section aria-label="From Our Blog" className="px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28 border-t border-blue-700 bg-blue-600">
            <div className="relative mx-auto max-w-lg divide-y-2 divide-blue-400 lg:max-w-7xl">
                <div data-aos="flip-up">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From Our Blog</h2>
                    <p className="mt-3 text-xl text-blue-200 sm:mt-4">
                        Stay updated with our latest articles, videos, and case studies on various initiatives and programs.
                    </p>
                </div>
                <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
                    {posts.map((post) => (
                        <div key={post.id} className='bg-blue-500 p-4 rounded-2xl hover:shadow-md' data-aos="zoom-in-up">
                            <div>
                                <span
                                    className={classNames(
                                        post.category.color,
                                        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                                    )}
                                >
                                    {post.category.name}
                                </span>
                            </div>
                            <Link to={`/blog/${post.id}`} className="mt-4 block">
                                <p className="text-xl font-semibold text-white">{post.title}</p>
                                <p className="mt-3 text-base text-blue-200">{post.description}</p>
                            </Link>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={`Profile picture of ${post.author.name}`} />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-white">{post.author.name}</p>
                                    <div className="flex space-x-1 text-sm text-blue-200">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{post.readingTime} read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}