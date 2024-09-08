import { motion } from "framer-motion";

export function About() {
  return (
    <div>
      <h1 className="text-center text-3xl">
        About <span className="text-neutral-400">Me</span>
      </h1>
      <div className="flex flex-wrap justify-center xl:justify-between mt-6">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl  lg:w-1/2 w-full"
          src="src/assets/images/file.png"
          alt="aboutImg"
        />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mt-4 text-center lg:text-start xl:mt-0"
        >
          I am a passionate front-end developer with 9 months of experience,
          specializing in building scalable and efficient applications using
          React and Next.js. My expertise in TypeScript and JavaScript allows me
          to write clean, maintainable, and complex code, ensuring long-term
          sustainability and high performance. I have a strong focus on creating
          polished, responsive designs, using Tailwind CSS and Styled-Components
          to deliver visually appealing and intuitive user interfaces. I also
          enjoy working with Ant Design libraries, as they offer powerful,
          flexible components that streamline development and provide a
          professional look and feel to projects. Driven by a desire to
          constantly learn and grow, I seek out new challenges that push my
          skills to the next level. I’m always excited to explore new
          technologies and take on projects that allow me to expand my
          expertise. My goal is to deliver high-quality work and continuously
          improve as a developer, staying on top of emerging trends in the
          industry.
        </motion.div>
      </div>
    </div>
  );
}
