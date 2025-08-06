"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion"
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Cpu, Zap, Terminal, Rocket, Brain, Shield, Award, Users, TrendingUp, Coffee, Clock, Star, Eye, MousePointer, Download, Play, CheckCircle, Target, Briefcase, Trophy, Lightbulb, Flame, Sparkles } from 'lucide-react'
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function AmbadiPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [showMatrix, setShowMatrix] = useState(false)
  const [terminalText, setTerminalText] = useState("")
  const [glitchActive, setGlitchActive] = useState(false)
  const [codeDemo, setCodeDemo] = useState("")
  const [quizScore, setQuizScore] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 500, damping: 50 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 50 })

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Download CV function
  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement('a')
    link.href = '/cv/ambadi-cv.pdf' // You would need to add this file
    link.download = 'Ambadi_A_CV.pdf'
    link.click()
  }

  // Contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Message sent! I\'ll get back to you within 24 hours.')
  }

  // Live coding demo
  useEffect(() => {
    const code = `
// AI-Powered IoT System
class SmartAutomation {
  constructor() {
    this.aiEngine = new GPT4();
    this.iotDevices = [];
    this.accuracy = 98;
  }
  
  async processData(sensorData) {
    const prediction = await this.aiEngine
      .analyze(sensorData);
    return this.optimizeResponse(prediction);
  }
  
  deployToProduction() {
    return "🚀 SYSTEM DEPLOYED!";
  }
}

const ambadi = new SmartAutomation();
console.log("Ready to shock the world!");
    `
    
    let i = 0
    const timer = setInterval(() => {
      if (i < code.length) {
        setCodeDemo(code.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 30)
    return () => clearInterval(timer)
  }, [])

  // Matrix effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMatrix(prev => !prev)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Typing effect
  useEffect(() => {
    const text = "BUILDING THE FUTURE WITH AI & IOT"
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  // Terminal effect
  useEffect(() => {
    const commands = [
      "$ initializing_ambadi.exe...",
      "$ loading_skills.json...",
      "$ connecting_to_future.ai...",
      "$ STATUS: READY_TO_SHOCK_THE_WORLD",
      "$ AMBADI.DEV ONLINE ✓"
    ]
    let commandIndex = 0
    let charIndex = 0
    
    const timer = setInterval(() => {
      if (commandIndex < commands.length) {
        if (charIndex < commands[commandIndex].length) {
          setTerminalText(prev => prev + commands[commandIndex][charIndex])
          charIndex++
        } else {
          setTerminalText(prev => prev + "\n")
          commandIndex++
          charIndex = 0
        }
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Glitch effect trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        ...(window.innerWidth < 768 && { duration: 0.3 })
      }
    }
  }

  const glitchVariants = {
    normal: { x: 0, textShadow: "none" },
    glitch: {
      x: [-2, 2, -2, 2, 0],
      textShadow: [
        "2px 0 #ff0000, -2px 0 #00ffff",
        "-2px 0 #ff0000, 2px 0 #00ffff",
        "2px 0 #ff0000, -2px 0 #00ffff"
      ],
      transition: {
        duration: 0.2,
        repeat: 3
      }
    }
  }

  const matrixVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    }
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 2 : 1,
        }}
      />

      {/* Matrix Background */}
      <AnimatePresence>
        {showMatrix && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500 text-xs font-mono"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={matrixVariants}
                animate="animate"
              >
                {Math.random().toString(36).substring(7)}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header 
        className="border-b-4 border-white p-4 md:p-6 relative z-20 sticky top-0 bg-black"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <motion.div 
            className="text-xl md:text-2xl font-bold tracking-wider"
            variants={glitchVariants}
            animate={glitchActive ? "glitch" : "normal"}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            [AMBADI.DEV]
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg">
            {[
              { name: "ABOUT", id: "about" },
              { name: "PROJECTS", id: "projects" },
              { name: "SKILLS", id: "skills" },
              { name: "EDUCATION", id: "education" },
              { name: "HIRE-ME", id: "hire-me" },
              { name: "CONTACT", id: "contact" }
            ].map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="hover:bg-white hover:text-black px-2 lg:px-3 py-1 transition-colors duration-100 relative cursor-pointer text-sm lg:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
              >
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="w-6 h-0.5 bg-white"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-white"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -6 : 0
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black border-b-4 border-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col p-4 space-y-4">
                {[
                  { name: "ABOUT", id: "about" },
                  { name: "PROJECTS", id: "projects" },
                  { name: "SKILLS", id: "skills" },
                  { name: "EDUCATION", id: "education" },
                  { name: "HIRE-ME", id: "hire-me" },
                  { name: "CONTACT", id: "contact" }
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    className="text-left text-lg font-bold hover:bg-white hover:text-black px-4 py-3 transition-colors duration-200 border-2 border-white"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-none mb-6 md:mb-8 tracking-tighter"
                initial={{ scale: 0.8, rotateX: -90 }}
                animate={{ scale: 1, rotateX: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                AI.
                <br />
                IOT.
                <br />
                <motion.span 
                  className="bg-white text-black px-1 md:px-2"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,255,255,0.8)"
                  }}
                >
                  AUTOMATION.
                </motion.span>
              </motion.h1>
              
              <motion.div
                className="text-sm md:text-xl mb-6 md:mb-8 leading-relaxed font-mono bg-black border-2 border-white p-3 md:p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div className="text-green-400 text-xs md:text-base">
                  {terminalText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    |
                  </motion.span>
                </motion.div>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 md:gap-4"
                variants={itemVariants}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Button 
                    onClick={() => scrollToSection('projects')}
                    className="bg-white text-black hover:bg-gray-200 text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold tracking-wider border-4 border-white rounded-none relative overflow-hidden group w-full sm:w-auto"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">[VIEW PROJECTS]</span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                >
                  <Button
                    onClick={downloadCV}
                    variant="outline"
                    className="border-4 border-white text-white hover:bg-white hover:text-black text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold tracking-wider rounded-none bg-transparent relative overflow-hidden group w-full sm:w-auto"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ y: "100%" }}
                      whileHover={{ y: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover:text-black flex items-center justify-center gap-2">
                      <Download className="w-4 h-4 md:w-5 md:h-5" />
                      [DOWNLOAD CV]
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="relative order-first lg:order-last"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div 
                className="w-full h-64 sm:h-80 md:h-96 bg-white border-4 md:border-8 border-white relative overflow-hidden"
                animate={{
                  boxShadow: [
                    "0 0 0 rgba(255,255,255,0)",
                    "0 0 30px rgba(255,255,255,0.3)",
                    "0 0 0 rgba(255,255,255,0)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Image
                  src="/images/ambadi-profile.jpg"
                  alt="Ambadi A - AI & IoT Engineer"
                  fill
                  className="object-cover grayscale"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <motion.section 
        id="about"
        className="py-20 px-6 bg-gray-900 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [ABOUT.THE.LEGEND]
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Personal Story */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="border-4 border-white p-8 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "white",
                  color: "black"
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-red-500 via-yellow-500 to-blue-500"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 2, delay: 0.5 }}
                />
                
                <div className="relative z-10 pl-6">
                  <motion.h3 
                    className="text-3xl font-black mb-6 tracking-wider"
                    animate={{
                      textShadow: [
                        "0 0 0 rgba(255,255,255,0)",
                        "0 0 10px rgba(255,255,255,0.3)",
                        "0 0 0 rgba(255,255,255,0)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    [THE.ORIGIN.STORY]
                  </motion.h3>
                  
                  <motion.div 
                    className="space-y-4 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, staggerChildren: 0.2 }}
                  >
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm md:text-lg"
                    >
                      {">"} Started as a curious kid who dismantled every electronic device in the house. 
                      My parents thought I was destructive - I was actually <strong>reverse-engineering the future</strong>.
                    </motion.p>
                    
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-sm md:text-lg"
                    >
                      {">"} At 21, while others were partying, I was building <strong>IoT systems that save lives</strong>. 
                      My LPG safety system prevented a warehouse disaster - that's when I knew I was born for this.
                    </motion.p>
                    
                    <motion.p
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-sm md:text-lg"
                    >
                      {">"} Today, I don't just write code - I <strong>architect solutions that shock the world</strong>. 
                      Every project is a chance to prove that the impossible is just another Tuesday for me.
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Mission & Values */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="space-y-6"
              >
                {[
                  {
                    title: "[MISSION.STATEMENT]",
                    content: "To bridge the gap between AI dreams and IoT reality, creating systems so intelligent they seem like magic.",
                    icon: Target,
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "[CORE.VALUES]",
                    content: "Innovation over imitation. Results over promises. Impact over ego. The future over the status quo.",
                    icon: Shield,
                    color: "from-green-500 to-blue-500"
                  },
                  {
                    title: "[DRIVING.FORCE]",
                    content: "Every line of code I write, every system I build, every problem I solve - it's all fuel for the UAE's smart city revolution.",
                    icon: Rocket,
                    color: "from-yellow-500 to-red-500"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="border-4 border-white p-6 relative overflow-hidden group"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "white",
                      color: "black"
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10`}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-4 mb-4"
                        animate={{
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <item.icon className="w-6 h-6" />
                        <h4 className="text-xl font-black tracking-wider">{item.title}</h4>
                      </motion.div>
                      
                      <motion.p 
                        className="text-lg leading-relaxed"
                        animate={{
                          opacity: [1, 0.8, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.7
                        }}
                      >
                          {">"} {item.content}
                      </motion.p>
                    </div>
                    
                    {/* Animated border */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
                      animate={{
                        x: ["-100%", "100%"]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Personal Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { number: "21", label: "YEARS OLD", icon: Clock },
              { number: "3+", label: "YEARS CODING", icon: Code },
              { number: "24/7", label: "INNOVATION MODE", icon: Zap },
              { number: "∞", label: "CURIOSITY LEVEL", icon: Brain }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center border-2 border-white p-4 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "white",
                  color: "black"
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <motion.div
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2" />
                </motion.div>
                
                <motion.div 
                  className="text-3xl font-black mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    delay: 1.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                
                <div className="text-sm font-bold tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Live Coding Demo Section */}
      <motion.section 
        className="py-20 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [LIVE.CODE.DEMO]
          </motion.h2>
          
          <motion.div
            className="bg-black border-4 border-white p-6 font-mono text-sm relative overflow-hidden"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="absolute top-4 left-4 flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </motion.div>
            
            <motion.pre 
              className="text-green-400 mt-8 whitespace-pre-wrap"
              style={{ fontSize: '14px', lineHeight: '1.5' }}
            >
              {codeDemo}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            </motion.pre>
            
            <motion.div
              className="mt-4 text-yellow-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              {">"} This is how I build AI-powered systems that shock clients!
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Hire Me Section */}
      <motion.section 
        id="hire-me"
        className="py-20 px-6 bg-white text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [WHY.HIRE.AMBADI]
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Rocket,
                title: "RAPID DEPLOYMENT",
                description: "I deliver MVPs in 2 weeks while others take months. Your competition won't see it coming.",
                metric: "2 WEEKS",
                color: "from-red-500 to-orange-500"
              },
              {
                icon: Brain,
                title: "AI AUTOMATION EXPERT",
                description: "Built 15+ AI systems that increased business efficiency by 40%. I make machines work for you.",
                metric: "40% BOOST",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Shield,
                title: "IOT PRECISION",
                description: "98% accuracy in IoT systems. When safety matters, my code saves lives and money.",
                metric: "98% ACCURACY",
                color: "from-green-500 to-blue-500"
              },
              {
                icon: Zap,
                title: "NO-CODE WIZARD",
                description: "I build complex systems without traditional coding. Faster, cheaper, more maintainable.",
                metric: "10X FASTER",
                color: "from-yellow-500 to-red-500"
              },
              {
                icon: Target,
                title: "UAE MARKET READY",
                description: "Understanding of UAE's smart city initiatives. I speak the language of Middle East tech.",
                metric: "UAE FOCUSED",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: Trophy,
                title: "PROVEN RESULTS",
                description: "Real businesses, real results. My systems are running in clinics and warehouses right now.",
                metric: "LIVE SYSTEMS",
                color: "from-orange-500 to-red-500"
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="border-4 border-black p-6 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "black",
                  color: "white",
                  y: -10
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-20`}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-4 mb-4"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <reason.icon className="w-8 h-8" />
                    <div className="text-2xl font-black">{reason.metric}</div>
                  </motion.div>
                  
                  <h3 className="text-xl font-black mb-3 tracking-wider">{reason.title}</h3>
                  <p className="text-sm leading-relaxed">{reason.description}</p>
                </div>
                
                {/* Pulse effect */}
                <motion.div
                  className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interactive Skills Assessment */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [SKILLS.ASSESSMENT]
          </motion.h2>
          
          <motion.div
            className="border-4 border-white p-8 bg-gray-900"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-black mb-6">TEST MY KNOWLEDGE</h3>
            
            {!showQuiz ? (
              <motion.div
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <Button
                  onClick={() => setShowQuiz(true)}
                  className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-4 font-bold tracking-wider border-4 border-white rounded-none"
                >
                  [START TECHNICAL QUIZ]
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="text-left">
                  <h4 className="text-xl font-bold mb-4">Q: What's the accuracy of my IoT safety system?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {["85%", "92%", "98%", "100%"].map((option, i) => (
                      <motion.button
                        key={i}
                        onClick={() => {
                          if (option === "98%") {
                            setQuizScore(prev => prev + 1)
                            alert("Correct! 🎉")
                          } else {
                            alert("Wrong! The answer is 98%")
                          }
                        }}
                        className="border-2 border-white p-3 hover:bg-white hover:text-black transition-colors"
                        whileHover={{ scale: 1.02 }}
                        onHoverStart={() => setIsHovered(true)}
                        onHoverEnd={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setIsHovered(false)}
                      >
                        {option}
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <div className="text-green-400 font-bold">
                  Score: {quizScore}/1 - {quizScore > 0 ? "You know your stuff!" : "Try again!"}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <motion.section 
        id="projects"
        className="py-20 px-6 bg-white text-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [PROJECTS.THAT.SHOCK]
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "[01] SAFE FLOW IOT",
                description: "IOT-BASED LPG SAFETY SYSTEM",
                details: [
                  "ESP32 + MQ-5 SENSOR INTEGRATION",
                  "98% ACCURACY, 5SEC RESPONSE TIME",
                  "REAL-TIME SMS/EMAIL ALERTS",
                  "SAVED WAREHOUSE FROM DISASTER"
                ],
                tech: ["ESP32", "IOT", "THINGSPEAK"],
                demoUrl: "#",
                githubUrl: "https://github.com/therealambadi"
              },
              {
                title: "[02] AI BUSINESS AUTOMATION",
                description: "24/7 CUSTOMER SUPPORT SYSTEMS",
                details: [
                  "MULTILINGUAL WHATSAPP CHATBOTS",
                  "40% RESPONSE TIME REDUCTION",
                  "25% CONVERSION INCREASE",
                  "RUNNING IN UAE CLINICS"
                ],
                tech: ["GPT-4", "N8N", "AUTOMATION"],
                demoUrl: "#",
                githubUrl: "https://github.com/therealambadi"
              },
              {
                title: "[03] AI-POWERED MVPS",
                description: "RAPID PROTOTYPE DEVELOPMENT",
                details: [
                  "GRINDUP FITNESS APP",
                  "SME BUDGETING TRACKER",
                  "2-WEEK RAPID PROTOTYPING",
                  "30% ENGAGEMENT IMPROVEMENT"
                ],
                tech: ["GLIDE", "NO-CODE", "MVP"],
                demoUrl: "#",
                githubUrl: "https://github.com/therealambadi"
              },
              {
                title: "[04] TRANSFORMERLESS UPS",
                description: "ENERGY-EFFICIENT POWER SYSTEM",
                details: [
                  "COMPACT UPS FOR LOW-POWER DEVICES",
                  "AUTOMATIC SWITCHOVER MECHANISM",
                  "BATTERY MANAGEMENT SYSTEM",
                  "OPTIMIZED FOR UAE CLIMATE"
                ],
                tech: ["POWER", "ELECTRONICS", "UPS"],
                demoUrl: "#",
                githubUrl: "https://github.com/therealambadi"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="border-4 border-black p-8 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "black",
                  color: "white"
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-4 tracking-wider">{project.title}</h3>
                  <p className="text-xl font-bold mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {project.details.map((detail, i) => (
                      <motion.div
                        key={i}
                        className="text-lg flex items-center gap-2"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        {">"} {detail}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-200 text-black px-2 py-1 text-sm font-bold group-hover:bg-white">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      onTouchStart={() => setIsHovered(true)}
                      onTouchEnd={() => setIsHovered(false)}
                    >
                      <Button
                        onClick={() => window.open(project.demoUrl, '_blank')}
                        className="bg-black text-white hover:bg-gray-800 px-4 py-2 font-bold border-2 border-black rounded-none group-hover:bg-white group-hover:text-black"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        DEMO
                      </Button>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      onHoverStart={() => setIsHovered(true)}
                      onHoverEnd={() => setIsHovered(false)}
                      onTouchStart={() => setIsHovered(true)}
                      onTouchEnd={() => setIsHovered(false)}
                    >
                      <Button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        variant="outline"
                        className="border-2 border-black text-black hover:bg-black hover:text-white px-4 py-2 font-bold rounded-none group-hover:border-white group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-black"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        CODE
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Interview Preparation Section */}
      <motion.section 
        className="py-20 px-6 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [INTERVIEW.READY]
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Lightbulb,
                title: "PROBLEM SOLVER",
                questions: [
                  "How would you optimize IoT sensor accuracy?",
                  "Design an AI system for real-time alerts",
                  "Scale automation for 1000+ users"
                ],
                answer: "I've solved these exact problems in my projects!"
              },
              {
                icon: Code,
                title: "TECHNICAL EXPERT",
                questions: [
                  "Explain your ESP32 implementation",
                  "How do you integrate GPT-4 APIs?",
                  "What's your no-code workflow?"
                ],
                answer: "Live demos available in my portfolio!"
              },
              {
                icon: Briefcase,
                title: "BUSINESS IMPACT",
                questions: [
                  "Show me ROI of your solutions",
                  "How do you measure success?",
                  "What's your deployment strategy?"
                ],
                answer: "40% efficiency gains, 98% accuracy, 2-week delivery!"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="border-4 border-white p-6 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "black"
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    animate={{
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <category.icon className="w-8 h-8" />
                    <h3 className="text-2xl font-black">{category.title}</h3>
                  </motion.div>
                  
                  <div className="space-y-3 mb-6">
                    {category.questions.map((question, i) => (
                      <motion.div
                        key={i}
                        className="text-sm p-2 border border-gray-600 group-hover:border-black"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                      >
                        Q: {question}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    className="text-green-400 font-bold group-hover:text-green-600"
                    animate={{
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    ✓ {category.answer}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            [SKILL.MATRIX]
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "[AI & AUTOMATION]",
                skills: ["GPT-4, CLAUDE, GEMINI", "N8N WORKFLOW ORCHESTRATION", "LANGCHAIN/LANGGRAPH", "PROMPT ENGINEERING", "API INTEGRATION"],
                icon: Brain,
                level: 95
              },
              {
                title: "[NO-CODE/DEV]",
                skills: ["GLIDE, SOFTR", "V0 DEV, CURSOR", "TALLY.SO, FIGMA", "ZAPIER, MAKE, PABBLY", "GOOGLE APPS SCRIPT"],
                icon: Code,
                level: 90
              },
              {
                title: "[IOT & HARDWARE]",
                skills: ["ESP32, ARDUINO", "THINGSPEAK, SENSORS", "CIRCUIT DESIGN", "PCB DESIGN (BASIC)", "EMBEDDED SYSTEMS"],
                icon: Cpu,
                level: 88
              }
            ].map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="border-4 border-white p-8 relative overflow-hidden group"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "white",
                  color: "black"
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    animate={{
                      x: [0, 5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: categoryIndex * 0.3
                    }}
                  >
                    <category.icon className="w-8 h-8" />
                    <h3 className="text-2xl font-black tracking-wider">{category.title}</h3>
                  </motion.div>
                  
                  <div className="space-y-3 mb-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="text-lg flex items-center gap-2"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          duration: 0.5
                        }}
                        whileHover={{ 
                          x: 10,
                          color: "#ff0000"
                        }}
                      >
                        <motion.span
                          animate={{
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.2
                          }}
                        >
                          {"►"}
                        </motion.span>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Skill level indicator */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-bold">MASTERY LEVEL</span>
                      <span className="text-sm font-bold">{category.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-3 border-2 border-white group-hover:border-black">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.level}%` }}
                        transition={{ delay: categoryIndex * 0.2 + 0.5, duration: 1.5 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        id="education"
        className="py-20 px-6 bg-white text-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated academic elements */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%)",
              "linear-gradient(45deg, transparent 25%, #000 25%), linear-gradient(-45deg, transparent 25%, #000 25%)",
              "linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: "20px 20px" }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 md:mb-16 text-center"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            [ACADEMIC.ARSENAL]
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Main Education */}
            <motion.div variants={itemVariants}>
              <motion.div
                className="border-4 border-black p-8 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "black",
                  color: "white",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 opacity-20 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    animate={{
                      x: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    <Award className="w-10 h-10" />
                    <div>
                      <h3 className="text-3xl font-black tracking-wider">[CURRENT.PURSUIT]</h3>
                      <motion.div 
                        className="text-lg font-bold"
                        animate={{
                          color: ["#000000", "#ff0000", "#000000"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        2021 - 2025 (GRADUATING SOON!)
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="text-2xl font-black mb-4"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      B.TECH ELECTRONICS & COMMUNICATION ENGINEERING
                    </motion.div>
                    
                    <motion.div
                      className="text-xl font-bold mb-6"
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      AMRITA VISHWA VIDYAPEETHAM, COIMBATORE
                    </motion.div>
                    
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="border-2 border-black group-hover:border-white p-4 text-center">
                        <motion.div 
                          className="text-3xl font-black mb-2"
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                          7.8+
                        </motion.div>
                        <div className="text-sm font-bold">CGPA</div>
                      </div>
                      
                      <div className="border-2 border-black group-hover:border-white p-4 text-center">
                        <motion.div 
                          className="text-3xl font-black mb-2"
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        >
                          TOP 10%
                        </motion.div>
                        <div className="text-sm font-bold">CLASS RANK</div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Academic Achievements */}
            <motion.div variants={itemVariants}>
              <motion.div className="space-y-6">
                <motion.h3 
                  className="text-3xl font-black mb-6 tracking-wider"
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  [ACADEMIC.DOMINATION]
                </motion.h3>
                
                {[
                  {
                    title: "CORE SUBJECTS MASTERED",
                    items: ["EMBEDDED SYSTEMS", "DIGITAL SIGNAL PROCESSING", "MICROPROCESSORS", "COMMUNICATION SYSTEMS", "VLSI DESIGN"],
                    icon: Cpu,
                    color: "from-green-500 to-blue-500"
                  },
                  {
                    title: "SPECIALIZED FOCUS AREAS",
                    items: ["IOT SYSTEM DESIGN", "AI/ML APPLICATIONS", "AUTOMATION ENGINEERING", "SENSOR NETWORKS", "SMART SYSTEMS"],
                    icon: Brain,
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    title: "PRACTICAL ACHIEVEMENTS",
                    items: ["15+ LIVE PROJECTS", "INDUSTRY COLLABORATIONS", "RESEARCH PUBLICATIONS", "HACKATHON VICTORIES", "INNOVATION AWARDS"],
                    icon: Trophy,
                    color: "from-yellow-500 to-red-500"
                  }
                ].map((category, index) => (
                  <motion.div
                    key={index}
                    className="border-4 border-black p-6 relative overflow-hidden group"
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: "black",
                      color: "white"
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20`}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center gap-4 mb-4"
                        animate={{
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      >
                        <category.icon className="w-6 h-6" />
                        <h4 className="text-xl font-black tracking-wider">{category.title}</h4>
                      </motion.div>
                      
                      <div className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="text-sm flex items-center gap-2"
                            initial={{ x: -10, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ 
                              delay: 0.5 + index * 0.1 + itemIndex * 0.05
                            }}
                            whileHover={{ 
                              x: 5,
                              color: "#ff0000"
                            }}
                          >
                            <motion.span
                              animate={{
                                rotate: [0, 360]
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: itemIndex * 0.2
                              }}
                            >
                              {"►"}
                            </motion.span>
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Academic Timeline */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.h3 
              className="text-3xl font-black mb-8 text-center tracking-wider"
              animate={{
                textShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 10px rgba(0,0,0,0.3)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              [ACADEMIC.EVOLUTION]
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-black"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              {[
                {
                  year: "2021",
                  title: "ENGINEERING JOURNEY BEGINS",
                  description: "Started B.Tech ECE at Amrita Vishwa Vidyapeetham",
                  achievement: "Foundation in Electronics & Communication"
                },
                {
                  year: "2022",
                  title: "FIRST BREAKTHROUGH",
                  description: "Built first IoT prototype - Smart Irrigation System",
                  achievement: "Practical Application of Theory"
                },
                {
                  year: "2023",
                  title: "SPECIALIZATION FOCUS",
                  description: "Deep dive into AI/ML and IoT integration",
                  achievement: "Advanced Project Development"
                },
                {
                  year: "2024",
                  title: "INDUSTRY COLLABORATION",
                  description: "Real-world projects with business impact",
                  achievement: "Professional Experience Gained"
                },
                {
                  year: "2025",
                  title: "GRADUATION & BEYOND",
                  description: "Ready to revolutionize UAE's tech landscape",
                  achievement: "Future Tech Leader"
                }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  initial={{ 
                    x: index % 2 === 0 ? -100 : 100,
                    opacity: 0 
                  }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.8 + index * 0.2,
                    duration: 0.8,
                    type: "spring"
                  }}
                >
                  <motion.div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                  >
                    <motion.div
                      className="border-4 border-black p-4 bg-white relative overflow-hidden group"
                      whileHover={{
                        backgroundColor: "black",
                        color: "white",
                        boxShadow: "0 10px 20px rgba(0,0,0,0.3)"
                      }}
                    >
                      <div className="relative z-10">
                        <motion.div
                          className="text-2xl font-black mb-2"
                          animate={{
                            scale: [1, 1.05, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        >
                          {milestone.year}
                        </motion.div>
                        <h4 className="text-lg font-black mb-2">{milestone.title}</h4>
                        <p className="text-sm mb-2">{milestone.description}</p>
                        <motion.div 
                          className="text-xs font-bold text-green-600 group-hover:text-green-400"
                          animate={{
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.4
                          }}
                        >
                          ✓ {milestone.achievement}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                  
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full border-4 border-white z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: 0.8 + index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.5,
                      backgroundColor: "#ff0000"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 px-6 bg-white text-black relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-8 leading-none"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            READY TO
            <br />
            <motion.span 
              className="bg-black text-white px-4"
              animate={{
                boxShadow: [
                  "0 0 0 rgba(0,0,0,0)",
                  "0 0 30px rgba(0,0,0,0.5)",
                  "0 0 0 rgba(0,0,0,0)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              HIRE
            </motion.span>
            <br />
            THE FUTURE?
          </motion.h2>
          
          <motion.div
            className="text-xl mb-12 font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              animate={{
                color: ["#000000", "#ff0000", "#000000"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {">"} {typedText}
            </motion.div>
          </motion.div>
          
          <motion.form 
            onSubmit={handleContactSubmit}
            className="max-w-md mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <Input
                  type="email"
                  placeholder="YOUR.EMAIL@COMPANY.COM"
                  required
                  className="border-4 border-black rounded-none text-lg p-4 font-mono bg-white focus:bg-black focus:text-white transition-all duration-300"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <textarea
                  placeholder="TELL ME ABOUT YOUR PROJECT..."
                  required
                  rows={4}
                  className="w-full border-4 border-black rounded-none text-lg p-4 font-mono bg-white focus:bg-black focus:text-white transition-all duration-300 resize-none"
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
              >
                <Button 
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 font-black tracking-wider border-4 border-black rounded-none relative overflow-hidden group w-full"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Rocket className="w-5 h-5" />
                    [HIRE ME NOW]
                  </span>
                </Button>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-sm mt-4 font-bold"
              animate={{
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {">"} RESPONSE GUARANTEED WITHIN 24 HOURS
            </motion.p>
          </motion.form>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="border-t-4 border-white py-12 px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-black mb-4 tracking-wider">[CONTACT.MATRIX]</h3>
              <div className="space-y-2">
                <motion.a 
                  href="mailto:ambadimac@gmail.com"
                  className="flex items-center gap-2 text-lg hover:bg-white hover:text-black px-2 py-1 transition-colors group"
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                >
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  {">"} AMBADIMAC@GMAIL.COM
                </motion.a>
                <motion.a 
                  href="tel:+917994486371"
                  className="flex items-center gap-2 text-lg hover:bg-white hover:text-black px-2 py-1 transition-colors group"
                  whileHover={{ x: 5 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                >
                  <Phone className="w-5 h-5 group-hover:animate-bounce" />
                  {">"} +91 7994486371
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-black mb-4 tracking-wider">[SOCIAL.NETWORK]</h3>
              <div className="space-y-2">
                <motion.a 
                  href="https://linkedin.com/in/therealambadi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:bg-white hover:text-black px-2 py-1 transition-colors group"
                  whileHover={{ x: 5, scale: 1.05 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                >
                  <Linkedin className="w-5 h-5 group-hover:animate-spin" />
                  {">"} LINKEDIN/THEREALAMBADI
                </motion.a>
                <motion.a 
                  href="https://github.com/therealambadi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg hover:bg-white hover:text-black px-2 py-1 transition-colors group"
                  whileHover={{ x: 5, scale: 1.05 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onTouchStart={() => setIsHovered(true)}
                  onTouchEnd={() => setIsHovered(false)}
                >
                  <Github className="w-5 h-5 group-hover:animate-pulse" />
                  {">"} GITHUB/THEREALAMBADI
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-black mb-4 tracking-wider">[AVAILABILITY]</h3>
              <motion.div 
                className="space-y-2"
                animate={{
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-lg">
                  {">"} KERALA, INDIA
                  <br />
                  {">"} UAE OPPORTUNITIES WELCOME
                  <br />
                  {">"} REMOTE WORK ENABLED
                  <br />
                  <motion.span
                    className="text-green-400 font-bold"
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {">"} AVAILABLE FOR HIRE NOW!
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t-4 border-white mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p 
              className="text-lg font-bold"
              animate={{
                textShadow: [
                  "0 0 0 rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 0 rgba(255,255,255,0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              © 2024 AMBADI.DEV - THE FUTURE IS NOW, AND I'M BUILDING IT
            </motion.p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  )
}
