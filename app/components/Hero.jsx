'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const arrow = {
  initial: { y: '0', scale: 1 },
  animate: {
    scale: 1.2,
  },
};

const Hero = () => {
  const [greeting, setGreeting] = useState(0);

  const greetings = [
    'Halo Semua!',
    'Hello there!',
    'こんにちは!',
    '大家好!',
    'Bonjour!',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting((prev) => {
        if (prev > greetings.length - 2) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [greeting]);

  return (
    <>
      <div className="relative flex justify-center">
        <motion.div
          className="bg-[#24272B1A] rounded-3xl p-[48px] group"
          whileHover={{
            y: '-20px',
          }}
        >
          <div>
            <Image
              height={50}
              width={50}
              className="w-[558px] h-[225px]"
              src={'/hero/profile.svg'}
              alt="profile"
              priority
            />
          </div>
          <div>
            <Image
              height={50}
              width={50}
              className="w-[558px]  mt-3"
              src={'/hero/minutes.svg'}
              alt="minutes"
            />
          </div>
          <div className="flex justify-center items-center gap-7 mt-10">
            {/* Prev */}
            <svg
              className="fill-[#BFC1C4] transition-all w-[55px]"
              viewBox="0 0 61 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.58649 33.1824C2.91599 32.218 2.91599 29.8068 4.58649 28.8424L27.1382 15.8221C28.8087 14.8576 30.8968 16.0632 30.8968 17.9922L30.8968 44.0326C30.8968 45.9616 28.8087 47.1671 27.1382 46.2027L4.58649 33.1824Z" />
              <path d="M32.1497 33.1824C30.4792 32.218 30.4792 29.8068 32.1497 28.8424L54.7014 15.8221C56.3719 14.8576 58.4601 16.0632 58.4601 17.9922V44.0326C58.4601 45.9616 56.3719 47.1671 54.7014 46.2027L32.1497 33.1824Z" />
            </svg>
            {/* Pause */}
            <svg
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#BFC1C4] group-hover:fill-black transition-all w-[55px]"
            >
              <path d="M17.4015 13.3456C17.4015 11.8729 18.5954 10.679 20.0682 10.679H26.7348C28.2076 10.679 29.4015 11.8729 29.4015 13.3456V50.679C29.4015 52.1517 28.2076 53.3456 26.7348 53.3456H20.0682C18.5954 53.3456 17.4015 52.1517 17.4015 50.679V13.3456Z" />
              <path d="M34.7348 13.3456C34.7348 11.8729 35.9287 10.679 37.4015 10.679H44.0682C45.5409 10.679 46.7348 11.8729 46.7348 13.3456V50.679C46.7348 52.1517 45.5409 53.3456 44.0682 53.3456H37.4015C35.9287 53.3456 34.7348 52.1517 34.7348 50.679V13.3456Z" />
            </svg>
            <svg
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#BFC1C4] group-hover:fill-black transition-all w-[55px]"
            >
              <path d="M60.172 34.3218C61.9498 33.2954 61.9498 30.7294 60.172 29.703L36.172 15.8466C34.3943 14.8202 32.172 16.1032 32.172 18.156L32.172 45.8688C32.172 47.9216 34.3943 49.2046 36.172 48.1782L60.172 34.3218Z" />
              <path d="M30.8387 34.3218C32.6165 33.2954 32.6165 30.7294 30.8387 29.703L6.8387 15.8466C5.06092 14.8202 2.8387 16.1032 2.8387 18.156V45.8688C2.8387 47.9216 5.06092 49.2046 6.8387 48.1782L30.8387 34.3218Z" />
            </svg>
          </div>
        </motion.div>
        <div className="absolute -bottom-[120px] z-20 left-1/2 transform -translate-x-1/2 ">
          {/* first line */}
          <div className="flex gap-3">
            <div className="bg-secondary hero-text">
              <h1>Innovation</h1>
            </div>
            <div className="bg-[#0B0C0E1A] hero-text">
              <h1>Meets</h1>
            </div>
            <div className="bg-[#0B0C0E1A] hero-text">
              <h1>Intuition</h1>
            </div>
          </div>
          {/* second line */}
          <div className="flex gap-3 justify-center mt-6">
            <div className="bg-[#0B0C0E1A]  hero-text">
              <h1>UI/UX</h1>
            </div>
            <div className="bg-secondary hero-text">
              <h1>Portfolio</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Hero */}
      <div className="absolute -bottom-24 w-full grid grid-flow-row-dense grid-cols-4 grid-rows-4 px-[3vw]">
        <div className="col-span-1 flex">
          <AnimatePresence initial={false} custom={1}>
            <motion.div className="bg-primary rounded-2xl p-[1vh] text-white flex items-center">
              <motion.p
                key={greeting}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {greetings[greeting]}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center col-span-2">
          <motion.div
            initial="initial"
            animate="initial"
            whileHover="animate"
            className="bg-[#0B0C0E1A] p-2 rounded-full"
          >
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              variants={arrow}
            >
              <g clipPath="url(#clip0_1406_1380)">
                <path
                  d="M12 20.27C11.8012 20.2698 11.6105 20.1907 11.47 20.05L4.47 13.05C4.28243 12.8571 4.21204 12.5788 4.28533 12.3199C4.35863 12.061 4.56447 11.8608 4.82533 11.7949C5.08619 11.7289 5.36243 11.8071 5.55 12L12 18.45L18.45 12C18.637 11.7994 18.9186 11.7168 19.1843 11.7846C19.45 11.8525 19.6575 12.06 19.7254 12.3257C19.7932 12.5915 19.7106 12.873 19.51 13.06L12.51 20.06C12.3728 20.1922 12.1905 20.2673 12 20.27Z"
                  fill="#24272B"
                />
                <path
                  d="M12 20.26C11.588 20.2546 11.2554 19.922 11.25 19.51V4.51001C11.25 4.24206 11.3929 3.99447 11.625 3.86049C11.857 3.72652 12.1429 3.72652 12.375 3.86049C12.607 3.99447 12.75 4.24206 12.75 4.51001V19.51C12.7446 19.922 12.412 20.2546 12 20.26Z"
                  fill="#24272B"
                />
                <path
                  d="M12 20.27C11.8012 20.2698 11.6105 20.1907 11.47 20.05L4.47 13.05C4.28243 12.8571 4.21204 12.5788 4.28533 12.3199C4.35863 12.061 4.56447 11.8608 4.82533 11.7949C5.08619 11.7289 5.36243 11.8071 5.55 12L12 18.45L18.45 12C18.637 11.7994 18.9186 11.7168 19.1843 11.7846C19.45 11.8525 19.6575 12.06 19.7254 12.3257C19.7932 12.5915 19.7106 12.873 19.51 13.06L12.51 20.06C12.3728 20.1922 12.1905 20.2673 12 20.27Z"
                  fill="#24272B"
                />
                <path
                  d="M12 20.26C11.588 20.2546 11.2554 19.922 11.25 19.51V4.51001C11.25 4.24206 11.3929 3.99447 11.625 3.86049C11.857 3.72652 12.1429 3.72652 12.375 3.86049C12.607 3.99447 12.75 4.24206 12.75 4.51001V19.51C12.7446 19.922 12.412 20.2546 12 20.26Z"
                  fill="#24272B"
                />
              </g>
              <defs>
                <clipPath id="clip0_1406_1380">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>
          </motion.div>
        </div>
        <div className="col-span-1 flex flex-row-reverse">
          <p>3 Years of Experience in UI/UX Design</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
