"use client";
import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";
const heebo = Heebo({ subsets: ["latin"] });

const BlogPage = () => {
  return (
    <div id="blog"  data-aos="zoom-in" className="bg-backgroundGreen my-16 h-auto flex flex-col justify-evenly">
      <div data-aos="zoom-in" className="w-full max-w-[1030px] p-6 mx-auto flex justify-between">
        <h2 data-aos="zoom-in" className={`text-[22px] font-medium ${heebo.className} text-foregroundGreen`}>
          Blog Page
        </h2>
        <Link href={"/"} className={`text-[22px] text-primaryGreen ${heebo.className}`}>
          Blogs
        </Link>
      </div>

      <div data-aos="zoom-in" className="bg-white w-full max-w-[1030px] h-auto flex flex-col items-center mx-auto p-6 rounded-lg shadow-lg">
        <div  className="w-full max-w-[800px]">
          <h1  className={`font-bold text-[26px] mb-4 ${heebo.className} text-foregroundGreen`}>
            The Future of AI: Transforming Industries and Daily Life
          </h1>

          <div data-aos="zoom-in" className="w-full flex justify-between mb-4">
            <p className={`text-[18px] font-medium text-foregroundGreen/70 ${heebo.className}`}>
              7 Oct 2024
            </p>
            <p className={`text-[18px] font-medium text-foregroundGreen/70 ${heebo.className}`}>
              Muhammad Abdullah
            </p>
          </div>

          <p className="leading-relaxed text-foregroundGreen">
            Artificial Intelligence is transforming the world at an unprecedented pace, reshaping industries and daily life. In this blog, I explore how AI is revolutionizing everything from business solutions to personal productivity. Stay tuned for in-depth insights, practical applications, and the latest advancements in AI technology. Join me on this exciting journey into the future of innovation.
          </p>

          <p className="leading-relaxed text-foregroundGreen mt-4">
            As AI continues to evolve, its impact on various sectors—from healthcare to education—is becoming more evident. Machine learning algorithms are now driving innovation, automating tasks, and unlocking new possibilities. In this part, well dive deeper into AIs real-world applications and its potential to solve some of the worlds most pressing challenges. The future is here, and AI is leading the way.
          </p>

          <p className="leading-relaxed text-foregroundGreen mt-4">
            In today’s world, Artificial Intelligence (AI) has made its mark in almost every field. This technology is helping make our lives easier and better. AI is not only used in industrial applications but has also started to show its impact in healthcare, education, and even entertainment industries. Through techniques like Machine Learning and Deep Learning, AI has made data analysis and decision-making faster and more accurate. However, along with its benefits, there are challenges such as employment issues and privacy concerns. Still, the future of AI looks bright, as it continues to help evolve our lives in new ways. We all need to understand the potential of AI and use it responsibly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
