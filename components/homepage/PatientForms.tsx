import React from "react";

const FormIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="12" x2="12" y2="18" />
    <polyline points="9 15 12 18 15 15" />
  </svg>
);

const PatientForms = () => {
  return (
    <div className="bg-blue-100 py-16 px-8">
      <div className="text-center mb-12 w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-josefin text-purple leading-snug">
          Download Patient Forms
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-[90%] md:w-[80%] max-w-[1200px] mx-auto">
        <a
          href="/documents/new-patient-form.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-gray-200 shadow-sm rounded-full pl-2 pr-8 py-2 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
        >
          <div className="bg-purple rounded-full w-12 h-12 flex items-center justify-center shrink-0">
            <FormIcon />
          </div>
          <span className="font-josefin text-purple font-semibold text-lg">
            New Patient Form
          </span>
        </a>
      </div>
    </div>
  );
};

export default PatientForms;
