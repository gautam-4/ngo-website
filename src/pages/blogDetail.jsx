import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: 'Promoting Health and Wellness in Communities',
        category: { name: 'Article', color: 'bg-indigo-100 text-indigo-800' },
        description:
            'Discover how our NGO is working to improve health and wellness through various initiatives and programs.',
        content: `
            <p>Our NGO is dedicated to improving health and wellness in communities through a variety of innovative initiatives and programs. We believe that by focusing on preventive care and education, we can make a significant impact on overall public health.</p>
            
            <h2>Key Initiatives:</h2>
            <ul>
                <li>Community Health Workshops: Regular sessions on nutrition, exercise, and mental health.</li>
                <li>Mobile Health Clinics: Bringing basic healthcare services to underserved areas.</li>
                <li>Wellness Challenges: Engaging community members in friendly competitions to promote healthy habits.</li>
                <li>Partnership with Local Schools: Implementing health education programs for children and adolescents.</li>
            </ul>

            <p>Through these programs, we've seen a marked improvement in health awareness and practices in the communities we serve. Our mobile clinics have provided essential care to thousands, while our workshops have empowered individuals to take charge of their own health.</p>

            <p>As we move forward, we're committed to expanding our reach and refining our approach based on community feedback and emerging health trends. Join us in our mission to create healthier, happier communities!</p>
        `,
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
        content: `
            <p>Education is a powerful tool for change, and our NGO is committed to making quality education accessible to all. This video showcases the impact of our educational outreach programs in underprivileged communities.</p>

            <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>

            <h2>Our Educational Initiatives:</h2>
            <ul>
                <li>After-School Tutoring Programs: Providing additional academic support to struggling students.</li>
                <li>Literacy Camps: Fun, engaging programs to improve reading and writing skills.</li>
                <li>STEM Workshops: Inspiring the next generation of scientists and engineers.</li>
                <li>Scholarship Programs: Helping talented students pursue higher education.</li>
            </ul>

            <p>These programs have led to improved academic performance, increased school retention rates, and brighter futures for countless children. We believe that by investing in education, we're not just changing individual lives, but entire communities.</p>

            <p>Watch the video to see firsthand the impact of our work, and learn how you can get involved in our mission to educate and empower.</p>
        `,
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
        content: `
            <p>At our NGO, we're committed to building a sustainable future through various environmental initiatives. This case study focuses on our successful environmental cleanup drives and how they're making a difference in our communities.</p>

            <h2>Case Study: Community Cleanup Initiative</h2>
            <h3>Background:</h3>
            <p>In response to growing concerns about litter and pollution in local parks and waterways, we launched a series of community cleanup events.</p>

            <h3>Approach:</h3>
            <ul>
                <li>Monthly cleanup events in different locations</li>
                <li>Partnerships with local schools and businesses</li>
                <li>Education on proper waste disposal and recycling</li>
                <li>Use of eco-friendly cleaning supplies</li>
            </ul>

            <h3>Results:</h3>
            <p>Over the past year, we've seen remarkable results:</p>
            <ul>
                <li>Removed over 5 tons of litter from parks and waterways</li>
                <li>Engaged more than 1,000 volunteers</li>
                <li>Increased recycling rates in participating communities by 25%</li>
                <li>Raised awareness about environmental issues, leading to ongoing community-led initiatives</li>
            </ul>

            <h3>Future Plans:</h3>
            <p>Building on this success, we're expanding our cleanup drives and launching new initiatives focused on renewable energy and sustainable urban planning.</p>

            <p>Join us in our next cleanup event and be part of the solution! Check our website for upcoming dates and locations.</p>
        `,
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

export default function BlogDetail() {
    const { id } = useParams();
    const post = posts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div className="text-center py-10">Blog post not found</div>;
    }

    return (
        <article className="max-w-2xl mx-auto px-6 py-10">
            <header>
                <div className="mb-6">
                    <span
                        className={`${post.category.color} inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`}
                    >
                        {post.category.name}
                    </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
                <div className="flex items-center mb-6">
                    <img className="h-10 w-10 rounded-full mr-4" src={post.author.imageUrl} alt={post.author.name} />
                    <div>
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span>{post.readingTime} read</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className="prose prose-lg prose-indigo mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
}