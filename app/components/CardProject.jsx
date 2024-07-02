'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CardProject = ({ imgUrl, title, jobType, year, link }) => {
  return (
    <div className="flex flex-col gap-3">
      <motion.div
        whileHover={{
          y: '-20px',
          boxShadow: '2px 2px 12px 0 rgba(0, 0, 0, 0.2)',
        }}
        transition={{ duration: 1 }}
      >
        <Link href={link} target="_blank">
          <Image
            height={500}
            width={500}
            className="w-[50vw] h-full"
            alt="astra"
            src={`/project/${imgUrl}`}
          />
        </Link>
      </motion.div>
      <div>
        <h2 className="text-4xl">{title}</h2>
      </div>
      <div className="border-t-2 h-1"></div>
      <div className="flex justify-between text-[#7D8187]">
        <p>{jobType}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default CardProject;
