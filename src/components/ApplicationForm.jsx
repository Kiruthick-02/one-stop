import React from 'react';
import { Globe } from 'lucide-react';

const ApplicationSection = () => {
  return (
    <section id="application" className="application-section py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-500">Create Magic</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take the first step towards joining our creative family. We can't wait to see what you'll bring to the table.
          </p>
        </div>

        <div className="application-form bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Application Form</h3>
            <p className="text-gray-600">Fill out the form below to start your journey with us</p>
          </div>
          
          {/* Google Form Embed Placeholder */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">Google Form Integration</h4>
              <p className="text-gray-600 mb-6">
                Replace this section with your embedded Google Form iframe
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <code className="text-sm text-gray-700 block">
                {<iframe 
  src="https://docs.google.com/forms/d/e/1FAIpQLSeoLDL6evAW7xsjMnUaC83G-Qem7AXxtW5shtTeoJDQm3-Hsg/viewform?embedded=true" 
  width="100%" 
  height="600" 
  frameborder="0" 
  marginheight="0" 
  marginwidth="0">
  Loading…
</iframe>}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;