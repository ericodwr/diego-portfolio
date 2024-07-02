import React from 'react';
import CardProject from './CardProject';

const Project = () => {
  const projectList = [
    {
      imgUrl: 'astra-project.svg',
      title: 'Incentive Disbursement - Astra Financial',
      jobType: 'Profesional Experience',
      year: '2024',
      link: 'https://www.figma.com/proto/cAlT7tL6F5vWQeMS9P8IkA/CMS---Design-System?page-id=2109%3A35740&node-id=2109-35741&viewport=457%2C2271%2C0.21&t=oDjRvvoC8czYsZ6O-1&scaling=min-zoom&starting-point-node-id=2109%3A35741',
    },
    {
      imgUrl: 'mabol-project.svg',
      title: 'Mabol - Football Cummunity Apps',
      jobType: 'UI/UX Case Study',
      year: '2024',
      link: 'https://www.behance.net/gallery/198389881/UIUX-Case-Study-Football-Community-Platform',
    },
    {
      imgUrl: 'aloshop-project.svg',
      title: 'Promotion Management - Aloshop by Shipper',
      jobType: 'Profesional Experience',
      year: '2023',
      link: 'https://www.figma.com/proto/jj5p7L8jMQZNdRp52SC74d/Study-Case?page-id=43%3A2&type=design&node-id=177-571&viewport=-189%2C333%2C0.1&t=7OgJX1Bd2MiFK1DN-1&scaling=min-zoom&starting-point-node-id=177%3A571&mode=design',
    },
    {
      imgUrl: 'artfest-project.svg',
      title: 'Artfest - Art Festivel Platform',
      jobType: 'Campus Project',
      year: '2022',
      link: 'https://dribbble.com/shots/23810736-Art-Festival-Mobile-Apps?utm_source=Clipboard_Shot&utm_campaign=digo13&utm_content=Art%20Festival%20Mobile%20Apps&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=digo13&utm_content=Art%20Festival%20Mobile%20Apps&utm_medium=Social_Share',
    },
    {
      imgUrl: 'invoiceaja-project.svg',
      title: 'Invoicein Aja - Generate Invoice System',
      jobType: 'Capstone Project',
      year: '2022',
      link: 'https://www.behance.net/gallery/198389563/Invoice-PlatformCapstone-Project',
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center pt-5">
      <h2 className="text-3xl mb-9 flex items-start w-[50vw]">Recent Work</h2>
      <div className="mt-4 flex flex-col gap-12">
        {projectList.map((project, i) => {
          const { imgUrl, jobType, title, year, link } = project;
          return (
            <CardProject
              key={i}
              imgUrl={imgUrl}
              title={title}
              jobType={jobType}
              year={year}
              link={link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
