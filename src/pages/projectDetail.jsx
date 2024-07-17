import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Assuming projectsData is imported or defined here
const projectsData = [
  {
    id: 1,
    title: 'Project A',
    category: 'Education',
    status: 'Ongoing',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    impact: 'This project aims to improve literacy rates in underprivileged areas.',
    goals: ['Increase reading proficiency by 30%', 'Distribute 10,000 books', 'Train 100 teachers'],
    documents: ['Project Proposal', 'Mid-term Report', 'Budget Allocation'],
  },
  {
    id: 2,
    title: 'Project B',
    category: 'Healthcare',
    status: 'Completed',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    impact: 'This project has successfully improved access to healthcare in rural communities.',
    goals: ['Establish 5 mobile clinics', 'Provide medical care to 10,000 patients', 'Train 50 local healthcare workers'],
    documents: ['Final Report', 'Impact Assessment', 'Financial Statement'],
  },
  {
    id: 3,
    title: 'Project C',
    category: 'Technology',
    status: 'Ongoing',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    impact: 'This project is developing innovative solutions to reduce carbon emissions in urban areas.',
    goals: ['Develop a smart traffic management system', 'Reduce urban CO2 emissions by 15%', 'Implement in 3 major cities'],
    documents: ['Technical Specifications', 'Progress Report', 'Partnership Agreements'],
  },
  // ... other projects
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Project not found</h2>
        <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-16">
      <Link to="/" className="text-blue-500 hover:text-blue-600 mb-8 inline-block">
        &larr; Back to Projects
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img className="w-full h-auto rounded-lg shadow-lg" src={project.imageUrl} alt={project.title} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <p className="text-sm text-gray-600 mb-2">
            Status: <span className="font-semibold">{project.status}</span>
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Category: <span className="font-semibold">{project.category}</span>
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Impact</h3>
          <p className="text-gray-700 mb-4">{project.impact}</p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Goals</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            {project.goals.map((goal, index) => (
              <li key={index}>{goal}</li>
            ))}
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Related Documents</h3>
          <ul className="list-disc list-inside text-gray-700">
            {project.documents.map((doc, index) => (
              <li key={index}>
                <a href="#" className="text-blue-500 hover:text-blue-600">{doc}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;