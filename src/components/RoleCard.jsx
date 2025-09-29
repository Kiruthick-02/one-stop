import React from 'react';
import { Briefcase } from 'lucide-react';
import ShinyText from './../gsap/ShinyText'; // ✅ import it

const RoleCard = ({ role }) => {
  const IconComponent = role.icon;

  return (
    <div className="role-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-400">
      <div className="flex items-center justify-center w-25 h-16 rounded-2xl mb-6 mx-auto">
        {typeof IconComponent === 'string' ? (
          <img src={IconComponent} alt={role.title} className="w-20 h-15" />
        ) : (
          <IconComponent className="w-8 h-8 text-white" />
        )}
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{role.title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{role.description}</p>

      <div className="mt-6 text-center">
        <button
  type="button"
  onClick={() =>
    document.getElementById('application')?.scrollIntoView({ behavior: 'smooth' })
  }
  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] text-white rounded-full text-sm font-medium hover:from-[#1f2937] hover:to-[#374151] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition shadow-lg shadow-purple-900/30"
>
  <Briefcase className="w-4 h-4 mr-2 text-white-400" />
  <ShinyText
    text="Apply Now"
    disabled={false}
    speed={3}
    className="font-semibold text-white"
  />
</button>

      </div>
    </div>
  );
};

export default RoleCard;
