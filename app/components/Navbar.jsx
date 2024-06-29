'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const socialMedia = [
    {
      name: 'Behance',
      url: '',
    },
    {
      name: 'Dribble',
      url: '',
    },
    {
      name: 'LinkedIn',
      url: '',
    },
    {
      name: 'Instagram',
      url: '',
    },
  ];

  const button = {
    rest: { scale: 1 },
    hover: { scale: 1, y: '-10px' },
    pressed: { scale: 0.95 },
  };

  return (
    <nav className="relative flex justify-between items-center mx-[3vw]">
      <div className="relative h-20 w-20">
        <Image fill src={'/logo.svg'} alt="logo" />
      </div>
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
    </nav>
  );
};

export default Navbar;
