'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  const socialMedia = [
    {
      name: 'Behance',
      url: 'https://www.behance.net/diegoirfansyah',
    },
    {
      name: 'Dribbble',
      url: 'https://dribbble.com/diegoirfansyah',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/diego-irfansyah/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/diegoirfnsyh',
    },
  ];

  const button = {
    rest: { scale: 1 },
    hover: { scale: 1, y: '-10px' },
    pressed: { scale: 0.95 },
  };

  return (
    <footer className="flex justify-between items-center mx-[3vw] py-10 text-[#24272B]">
      <p>©Design and Developed by Ergowork 2024</p>
      <div>
        <ul className="flex gap-6 text-lg">
          {socialMedia.map((data, i) => (
            <motion.li
              variants={button}
              initial="rest"
              whileHover="hover"
              whileTap="pressed"
              key={i}
            >
              <Link href={data.url}>{data.name}</Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
