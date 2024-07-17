import React from 'react';
import { useParams, Link } from 'react-router-dom';


export const eventsData = [
    {
        id: 1,
        title: 'Community Health Fair',
        category: 'Healthcare',
        date: '2024-08-15',
        time: '9:00 AM - 3:00 PM',
        description: 'Join us for a day of health screenings, educational workshops, and wellness activities.',
        imageUrl: 'https://picsum.photos/seed/event1/600/400',
        location: 'Community Center, 123 Wellness Street, Springfield',
        registrationLink: 'https://example.com/register/community-health-fair',
        organizer: 'HealthFirst NGO',
        price: 'Free',
        capacity: 200,
        schedule: [
            { time: '9:00 AM - 10:00 AM', activity: 'Opening Ceremony and Welcome' },
            { time: '10:15 AM - 11:45 AM', activity: 'Health Screenings and Consultations' },
            { time: '12:00 PM - 1:00 PM', activity: 'Lunch Break' },
            { time: '1:15 PM - 2:30 PM', activity: 'Workshops on Nutrition and Fitness' },
            { time: '2:30 PM - 3:00 PM', activity: 'Q&A and Networking' }
        ],
        speakers: [
            { name: 'Dr. Jane Doe', role: 'Chief Medical Officer at HealthFirst' },
            { name: 'Nurse John Smith', role: 'Community Health Nurse' }
        ]
    },
    {
        id: 2,
        title: 'Environmental Cleanup Drive',
        category: 'Environment',
        date: '2024-09-22',
        time: '8:00 AM - 12:00 PM',
        description: 'Help us clean up our local parks and beaches. Volunteers of all ages are welcome.',
        imageUrl: 'https://picsum.photos/seed/event2/600/400',
        location: 'Beachside Park, 456 Green Avenue, Greenfield',
        registrationLink: 'https://example.com/register/environmental-cleanup',
        organizer: 'Eco Warriors NGO',
        price: 'Free',
        capacity: 150,
        schedule: [
            { time: '8:00 AM - 9:00 AM', activity: 'Registration and Briefing' },
            { time: '9:00 AM - 11:30 AM', activity: 'Cleanup Activities' },
            { time: '11:30 AM - 12:00 PM', activity: 'Debrief and Refreshments' }
        ],
        speakers: [
            { name: 'Emily Green', role: 'Environmental Scientist' },
            { name: 'Michael Rivers', role: 'Founder of Eco Warriors' }
        ]
    },
    {
        id: 3,
        title: 'Educational Outreach Program',
        category: 'Education',
        date: '2024-10-05',
        time: '10:00 AM - 2:00 PM',
        description: 'Participate in our program to tutor underprivileged children and distribute school supplies.',
        imageUrl: 'https://picsum.photos/seed/event3/600/400',
        location: 'Downtown Library, 789 Knowledge Street, Centerville',
        registrationLink: 'https://example.com/register/educational-outreach',
        organizer: 'Education For All NGO',
        price: 'Free',
        capacity: 100,
        schedule: [
            { time: '10:00 AM - 10:30 AM', activity: 'Introduction and Welcome' },
            { time: '10:30 AM - 12:00 PM', activity: 'Tutoring Sessions' },
            { time: '12:00 PM - 12:30 PM', activity: 'Lunch Break' },
            { time: '12:30 PM - 1:30 PM', activity: 'School Supplies Distribution' },
            { time: '1:30 PM - 2:00 PM', activity: 'Closing Remarks and Networking' }
        ],
        speakers: [
            { name: 'Sarah Wind', role: 'Education Specialist' },
            { name: 'David Johnson', role: 'Community Volunteer Coordinator' }
        ]
    }
];

const EventDetail = () => {
    const { eventId } = useParams();
    const event = eventsData.find((e) => e.id === parseInt(eventId));

    if (!event) {
        return (
            <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-16 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h2>
                <p className="text-gray-600 mb-8">The event you're looking for doesn't exist or has been removed.</p>
                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Back to Events
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
            <Link to="/" className="text-blue-500 hover:text-blue-600 mb-8 inline-block">
                &larr; Back to Events
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <img className="w-full h-auto rounded-lg shadow-lg" src={event.imageUrl} alt={event.title} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    <p className="text-sm text-gray-600 mb-2">
                        Date: <span className="font-semibold">{new Date(event.date).toLocaleDateString()}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Time: <span className="font-semibold">{event.time}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Location: <span className="font-semibold">{event.location}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Category: <span className="font-semibold">{event.category}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Organizer: <span className="font-semibold">{event.organizer}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                        Price: <span className="font-semibold">{event.price}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-6">
                        Capacity: <span className="font-semibold">{event.capacity} attendees</span>
                    </p>
                    <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
                    >
                        Register Now
                    </a>
                </div>
            </div>

            <div className='flex justify-between flex-wrap'>

                <div className="mb-8 mt-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Event Schedule</h3>
                    <ul className="space-y-4 sm:space-y-2">
                        {event.schedule.map((item, index) => (
                            <li key={index} className="flex flex-col sm:flex-row">
                                <span className="font-semibold w-full sm:w-40 mb-1 sm:mb-0">{item.time}</span>
                                <span className="w-full sm:w-auto">{item.activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-4'>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Speakers</h3>
                    <ul className="space-y-2">
                        {event.speakers.map((speaker, index) => (
                            <li key={index}>
                                <span className="font-semibold">{speaker.name}</span> - {speaker.role}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default EventDetail;