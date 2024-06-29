'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [index, setIndex] = useState(0);

  const text = ['Outstanding', 'Incredible', 'Fantastic', 'Amazing'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev > text.length - 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4000);

    return () => {
      return clearInterval(interval);
    };
  }, [index]);

  return (
    <div className="mx-[3vw] mt-20">
      <div className="border-t-2 h-1 my-12"></div>
      <div className="flex justify-center flex-col items-center">
        {/* first line */}
        <div className="flex gap-3">
          <div className="bg-[#0B0C0E1A] contact-text">
            <h1>Let's</h1>
          </div>
          <div className="bg-[#0B0C0E1A] contact-text">
            <h1>Create</h1>
          </div>
          <div className="bg-[#0B0C0E1A] contact-text">
            <h1>Something</h1>
          </div>
        </div>
        {/* second line */}
        <div className="flex gap-3 justify-center mt-6">
          <div className="bg-secondary  contact-text">
            <AnimatePresence initial={false} custom={1}>
              <motion.h1
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                {text[index]}
              </motion.h1>
            </AnimatePresence>
          </div>
          <div className="bg-[#0B0C0E1A] contact-text">
            <h1>Together</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
