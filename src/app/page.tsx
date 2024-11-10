"use client";
import Contact from "./componenets/contact";
import BlogPage from "./componenets/blog";
import Hero from "./componenets/hero";
import RecentPost from "./componenets/recentPost";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }, []);
  
  return (
    <div>
      <Hero/>
      <RecentPost/>
      <BlogPage/>
      <Contact/>
    </div>
  );
}
