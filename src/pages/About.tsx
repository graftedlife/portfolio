import React from 'react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  id: string;
}

export default function About() {
  const experiences: Experience[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      description: [
        'Led development of cloud-native applications using React and TypeScript',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Digital Innovations Ltd',
      period: '2018 - 2020',
      description: [
        'Developed responsive web applications using modern JavaScript frameworks',
        'Optimized application performance improving load times by 60%',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Tech University',
      year: '2018',
      description: 'Specialized in Software Engineering and Distributed Systems'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      year: '2016',
      description: 'Focus on Web Technologies and Algorithms'
    }
  ];

  const certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2022',
      id: 'AWS-123456'
    },
    {
      name: 'Professional Scrum Master',
      issuer: 'Scrum.org',
      year: '2021',
      id: 'PSM-789012'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-lg text-gray-600 mb-4">
          I'm a passionate software engineer with over 5 years of experience in building
          modern web applications. My expertise lies in React, TypeScript, and cloud
          technologies, with a strong focus on creating scalable and maintainable solutions.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <span className="text-gray-500">{edu.year}</span>
              </div>
              <p className="text-gray-600 mb-2">{edu.school}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center mb-6">
          <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-gray-600">Issuer: {cert.issuer}</p>
              <p className="text-gray-600">Year: {cert.year}</p>
              <p className="text-gray-500 text-sm">ID: {cert.id}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}