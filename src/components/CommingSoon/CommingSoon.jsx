import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiArrowRight } from "react-icons/hi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Facebook } from "../../Icons/Facebook";
import { WhatsApp } from "../../Icons/WhatsApp";
import { LinkedIn } from "../../Icons/Linkedln";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  // --- REAL COUNTDOWN LOGIC ---
  const calculateTimeLeft = () => {
    // Set your launch date here
    const launchDate = new Date("2026-12-31T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        // days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        days: 10, // For demo purposes, set to 10 days
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- VALIDATION & NOTIFY LOGIC ---
  const handleNotify = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Please enter an email address!");
    } else if (!emailRegex.test(email)) {
      toast.warning("Please enter a valid email address!");
    } else {
      toast.success("Success! You're on the list 🚀", {
        position: "top-center",
        autoClose: 4000,
        theme: "dark",
      });
      setEmail(""); // Clear input
    }
  };

  // Animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="relative min-h-screen w-full bg-[#162A45] flex items-center justify-center overflow-hidden font-sans">
      <ToastContainer />

      {/* Background Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-400/10 rounded-full blur-[120px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 px-6 text-center max-w-3xl"
      >
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black text-white mb-6"
        >
          WE'RE ALMOST <span className="text-green-400">READY!</span>
        </motion.h2>

        {/* daisyUI Real Countdown */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-5 mb-12"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="flex flex-col p-2 bg-white/5 rounded-box text-white border border-white/10 w-20"
            >
              <span className="countdown font-mono text-4xl mx-auto">
                <span style={{ "--value": value }}></span>
              </span>
              {label}
            </div>
          ))}
        </motion.div>

        {/* Subscription Form */}
        <motion.form
          variants={itemVariants}
          onSubmit={handleNotify}
          className="max-w-md mx-auto"
        >
          <div className="join w-full shadow-2xl">
            <div className="relative w-full">
              <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                className="input input-bordered join-item w-full pl-12 bg-white text-slate-800"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn bg-green-400 hover:bg-green-500 border-none text-[#162A45] font-bold px-6 join-item"
            >
              Notify Me <HiArrowRight />
            </button>
          </div>
        </motion.form>

        {/* Social Icons */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-6"
        >
          <div className="flex gap-4">
            {/* Placeholder for Social Icons */}
            <div className="w-8 h-8 rounded-full  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out">
              <Link to={"https://www.facebook.com"} target="_blank">
                <Facebook />
              </Link>
            </div>
            <div className="w-8 h-8 rounded-full  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out">
              <Link to={"https://www.whatsapp.com"} target="_blank">
                <WhatsApp />
              </Link>
            </div>
            <div className="w-8 h-8 rounded-full  cursor-pointer hover:-translate-y-1 duration-200 ease-in-out">
              <Link to={"https://www.linkedin.com"} target="_blank">
                <LinkedIn />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;
