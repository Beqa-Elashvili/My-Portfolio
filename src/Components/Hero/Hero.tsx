import { motion } from "framer-motion";
import image from "src@/assets/images/Hero.jpg";

export function Hero() {
  const container = (delay: number) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="block justify-between gap-4 items-center space-y-4 md:flex md:justify-center  md:items-start md: w-full">
      <div className="font-thin mt-12  flex flex-col items-center justify-center text-center lg:items-start lg:text-start">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-6xl"
        >
          BEQA ELASHVILI
        </motion.h1>
        <motion.p
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="text-4xl mt-4 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent tracking-tight"
        >
          Front-end Developer
        </motion.p>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="max-w-xl mt-8"
        >
          I’m a Front-End Developer with experience in React, Next.js,
          TypeScript, and JavaScript, focused on building responsive and
          user-friendly web applications. I also work with Prisma, Pusher,
          PostgreSQL, and MongoDB for full-stack development. I'm always eager
          to take on new challenges and grow my skills.
        </motion.p>
      </div>
      <img
        className="w-full md:w-2/6 m-auto rounded-lg shadow-2xl"
        src={image}
        alt="img"
      />
    </div>
  );
}
