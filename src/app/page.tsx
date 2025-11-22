"use client";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className=" bg-black/90 h-screen w-full flex justify-center items-center">
      <div className=" relative">
        <motion.div
          animate={{ x: 100, rotateX: 60, rotateY: 65 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          className=" clear-start bg-orange-500/50 h-60 w-60 rounded-3xl border-orange-500  border-2  transform-gpu perspective-normal absolute top-0 right-0 rotate-y-65 "
        ></motion.div>
      </div>
    </div>
  );
};

export default page;
