import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Project A',
    category: 'Education',
    status: 'Ongoing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://picsum.photos/seed/project1/300/200',
  },
  {
    id: 2,
    title: 'Project B',
    category: 'Healthcare',
    status: 'Completed',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    imageUrl: 'https://picsum.photos/seed/project2/300/200',
  },
  {
    id: 3,
    title: 'Project C',
    category: 'Technology',
    status: 'Ongoing',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
    imageUrl: 'https://picsum.photos/seed/project3/300/200',
  },
  // Add more projects as needed
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = projectsData.filter((project) =>
    filter === 'All' ? true : project.category === filter
  );

  return (
    <section className="py-16 border-t border-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8" data-aos="flip-up">Projects</h2>

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

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id} 
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
               data-aos="zoom-in-up"
            >
              <div>
                <img className="w-full h-48 object-cover" src={project.imageUrl} alt={project.title} />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-600">
                    Status: <span className="font-semibold">{project.status}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Category: <span className="font-semibold">{project.category}</span>
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

export default Projects;