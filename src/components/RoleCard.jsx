import React from 'react';
import { Briefcase } from 'lucide-react';

const RoleCard = ({ role }) => {
  const IconComponent = role.icon;
  
  return (
    <div className="role-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-400">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl mb-6 mx-auto">
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{role.title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{role.description}</p>
      
      <div className="mt-6 text-center">
        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-teal-100 text-purple-700 rounded-full text-sm font-medium">
          <Briefcase className="w-4 h-4 mr-2" />
          Apply Now
        </span>
      </div>
    </div>
  );
};

export default RoleCard;