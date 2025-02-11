import { motion } from "framer-motion";
import aboutImg from "src@/assets/images/aboutimg.png";

export function About() {
  return (
    <div>
      <h1 className="text-center text-3xl">
        About <span className="text-neutral-400">Me</span>
      </h1>
      <div className="block md:flex  gap-4 justify-center xl:justify-between mt-6">
        <motion.img
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl  lg:w-1/2 w-full md:w-1/2"
          src={aboutImg}
          alt="aboutImg"
        />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mt-4 text-center lg:text-start xl:mt-0"
        >
          I have strong experience in building modern, responsive, and dynamic
          web applications. My strengths lie in creating scalable and efficient
          applications using React and Next.js, and writing clean, maintainable
          code with TypeScript and JavaScript. I’m also skilled in using
          Tailwind CSS to design polished, responsive layouts that enhance the
          user experience. On the back end, I have experience working with
          Prisma, Pusher, PostgreSQL, and MongoDB for efficient database
          management and real-time data handling. I am proficient in building
          secure and robust back-end architectures to support seamless front-end
          experiences. I have successfully worked on projects such as a Car
          Rental Application, a Messenger Clone, and an Inventory Management
          System. Each of these projects demonstrates my ability to build
          complex full-stack applications, manage real-time data, and create
          intuitive, user-friendly solutions.
        </motion.div>
      </div>
    </div>
  );
}
