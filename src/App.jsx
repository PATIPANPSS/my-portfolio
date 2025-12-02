import { useState } from "react";
import "./App.css";
import {
  FaCode,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLine,
  FaMapMarkedAlt,
  FaPhone,
} from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Portfolio</h1>
          <div className="space-x-8 hidden md:flex text-slate-500 font-medium">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600">
              Skill
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Project
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16"
      >
        <div className="mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-100 overflow-hidden shadow-xl">
            <img
              src="/public/profile.jpeg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tight">
          Patipan Phaiseesuk
        </h1>
        <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed font-light">
          ผมมีความสนใจที่จะเป็น Junior Full-Stack Developer  กำลังมองหาประสบการ์ณในการทำงานทางสายงานนี้ ผมมีความตั้งใจและพร้อมเรียนรู้สิ่งใหม่ๆ เพื่อพัฒนาตัวเอง
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-700 transition shadow-lg"
          >
            View My Project
          </a>
          <a
            href="https://github.com/PATIPANPSS"
            target="_blank"
            className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:border-slate-400 transition"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </section>

      <section id="skills" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Technical Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Languages", skills: ["HTML", "CSS", "Javascript"] },
              {
                title: "Framework",
                skills: ["React", "Node.js", "Express.js", "Tailwind"],
              },
              { title: "Database", skills: ["MongoDB", "MySQL"] },
              {
                title: "Tools",
                skills: ["Git & GitHub", "REST API", "Postman"],
              },
            ].map((category) => (
              <div key={category.title} className="space-y-4">
                <h4 className="text-sm font-semibold text-slate-400 uppercase">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-2 bg-white border border-slate-200 rounded-md text-slate-600 text-sm "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
          </div>

          <div className="gird md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="group bg-white border border-slate-100 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="h-56 bg-slate-50">
                <img
                  src="/public/exprense-tracker.png"
                  alt=""
                  className="w-fit h-full mx-auto"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  Expense Tracker
                </h3>
                <p className="text-slate-500 mb-6 text-sm">
                  เว็บแอปพลิเคชันสำหรับบันทึกรายรับ รายจ่าย ช่วยจัดเรื่องการเงิน สามารถเพิ่ม และลบรายการ และยังช่วยคำนวณยอดเงินคงเหลือให้อัตโนมัติ
                </p>

                <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                  <div className="flex gap-2">
                    {["React", "Node.js", "MongoDB"].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="https://github.com/PATIPANPSS/expense-tracker"
                      target="_blank"
                      className="flex items-center gap-2 text-slate-400 hover:text-slate-900"
                    >
                      <FaCode /> Code
                    </a>
                    <a
                      href="https://expense-tracker-beta-green.vercel.app/"
                      target="_blank"
                      className="flex items-center gap-2 text-slate-400 hover:text-slate-900"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 text-slate-300 py-20">
        <div className="container mx-auto px-6">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
              <p className="text-slate-300 leading-relaxed max-w-md mx-auto md:mx-0">
                กำลังมองหาโอกาสและประสบการ์ณในการร่วมงานกับทีมพัฒนา หากมีสนใจ
                หรือมีคำแนะนำ สามารถติดต่อได้ผ่านช่องทางขวามือ
                พร้อมเริ่มงานทันทีครับ
              </p>

              <div className="flex justify-center md:justify-start space-x-6 mt-6">
                <a
                  href="https://github.com/PATIPANPSS"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition transform hover:scale-110"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://line.me/ti/p/~patipan_p"
                  target="_blank"
                  className="text-slate-400 hover:text-green-400 transition transform hover:scale-110"
                >
                  <FaLine size={28} />
                </a>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col gap-6 w-full max-w-sm">
              <div className="flex items-center gap-4 p-4">
                <div className="p-3 rounded-full">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Phone
                  </p>
                  <p className="text-lg font-medium">096-9085911</p>
                </div>
              </div>

              <a
                href="mailto:patipan@example.com"
                className="flex items-center gap-4 p-4"
              >
                <div className="p-3 rounded-full">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase font-semibold">
                    Email
                  </p>
                  <p className="text-lg font-medium">patipan110544@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 ">
                <div className="p-3 rounded-full">
                  <FaMapMarkedAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-semibold">
                    Location
                  </p>
                  <p className="text-lg font-medium">
                    129/112 หมู่.4 ซอยรังสิต-นครนายก 13 ตำบลประชาธิปัตย์
                    อำเภอธํญบุรี จังหวัดปทุมธานี 12130
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div className="text-center text-slate-500 text-sm">
          <p>© 2025 Patipan. Developed with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
