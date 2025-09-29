import React from 'react';
import RoleCard from './RoleCard';
import { roles } from '../data/roles';
import Threads from './../gsap/Threads';

const RolesGrid = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-transparent">
                <div className="absolute inset-0 -z-10 bg-black">
                  <Threads amplitude={3} distance={0} enableMouseInteraction={false} />
                </div>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">Creative Role</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Join our diverse team of creative professionals and help shape the future of digital storytelling.
          </p>
        </div>

        <div className="roles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesGrid;