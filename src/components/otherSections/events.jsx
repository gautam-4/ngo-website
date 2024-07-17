import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const eventsData = [
    {
      id: 1,
      title: 'Community Health Fair',
      category: 'Healthcare',
      date: '2024-08-15',
      time: '9:00 AM - 3:00 PM',
      description: 'Join us for a day of health screenings, educational workshops, and wellness activities.',
      imageUrl: 'https://picsum.photos/seed/event1/300/200',
      location: 'Community Center, Springfield',
      registrationLink: 'https://example.com/register/community-health-fair',
    },
    {
      id: 2,
      title: 'Environmental Cleanup Drive',
      category: 'Environment',
      date: '2024-09-22',
      time: '8:00 AM - 12:00 PM',
      description: 'Help us clean up our local parks and beaches. Volunteers of all ages are welcome.',
      imageUrl: 'https://picsum.photos/seed/event2/300/200',
      location: 'Beachside Park, Greenfield',
      registrationLink: 'https://example.com/register/environmental-cleanup',
    },
    {
      id: 3,
      title: 'Educational Outreach Program',
      category: 'Education',
      date: '2024-10-05',
      time: '10:00 AM - 2:00 PM',
      description: 'Participate in our program to tutor underprivileged children and distribute school supplies.',
      imageUrl: 'https://picsum.photos/seed/event3/300/200',
      location: 'Downtown Library, Centerville',
      registrationLink: 'https://example.com/register/educational-outreach',
    },
  ];
  

const Events = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(eventsData.map(event => event.category))];

  const filteredEvents = eventsData.filter((event) =>
    filter === 'All' ? true : event.category === filter
  );

  return (
    <section className="py-16 border-t border-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8" data-aos="flip-up">Upcoming Events</h2>

        {/* Filter dropdown */}
        <div className="mb-8 w-40" data-aos="flip-up">
          <label htmlFor="category-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Filter by category:
          </label>
          <div className="relative">
            <select
              id="category-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <Link 
              to={`/event/${event.id}`} 
              key={event.id} 
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="zoom-in-up"
            >
              <div>
                <img className="w-full h-48 object-cover" src={event.imageUrl} alt={event.title} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <p className="text-sm text-gray-600">
                    Date: <span className="font-semibold">{new Date(event.date).toLocaleDateString()}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Time: <span className="font-semibold">{event.time}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Category: <span className="font-semibold">{event.category}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;