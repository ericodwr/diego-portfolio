import React from 'react';
import CardProject from './CardProject';

const Project = () => {
  const projectList = [
    {
      imgUrl: 'astra.svg',
      title: 'Incentive Disbursement - Astra Financial',
      jobType: 'Profesional Experience',
      year: '2024',
    },
    {
      imgUrl: 'mabol.svg',
      title: 'Mabol - Football Cummunity Apps',
      jobType: 'UI/UX Case Study',
      year: '2024',
    },
    {
      imgUrl: 'aloshop.svg',
      title: 'Promotion Management - Aloshop by Shipper',
      jobType: 'Profesional Experience',
      year: '2023',
    },
    {
      imgUrl: 'artfest.svg',
      title: 'Artfest - Art Festivel Platform',
      jobType: 'Campus Project',
      year: '2022',
    },
    {
      imgUrl: 'invoiceaja.svg',
      title: 'Invoicein Aja - Generate Invoice System',
      jobType: 'Capstone Project',
      year: '2022',
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-3xl">Recent Work</h2>
      <div className="mt-4 flex flex-col gap-12">
        {projectList.map((project, i) => {
          const { imgUrl, jobType, title, year } = project;
          return (
            <CardProject
              key={i}
              imgUrl={imgUrl}
              title={title}
              jobType={jobType}
              year={year}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
