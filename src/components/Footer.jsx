import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-[#323232] py-20 pb-3 px-40 relative z-10"
      style={{ backgroundImage: "url('/fog.jpg')", backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#323232] to-transparent opacity-100"></div>

      <div className="relative z-10">
        <div className="container mx-auto pb-5 flex flex-col md:flex-row items-center justify-between">
          <span className="text-2xl font-bold bg-[#03b57b] py-1 px-2 rounded-lg">
            Fight
            <span className="text-xl hidden sm:inline text-[#03b57b] pt-3 pb-2 bg-[#323232] rounded-2xl p-1">
              Club
            </span>
          </span>

          <div className="mb-4 md:mb-0 text-[#b6b6b6]">
            <div className="flex flex-row space-y-4 items-end gap-10">
              <div className="flex items-center">
                <span className="mr-2">Harivan</span>
                <a
                  href="https://github.com/Harivan-T"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="text-[#b6b6b6] hover:text-[#03b57b]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harivan-tahir-2a5534177/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="text-[#b6b6b6] hover:text-[#03b57b]" />
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Mustafa</span>
                <a
                  href="https://github.com/MASS1N"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="text-[#b6b6b6] hover:text-[#03b57b]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mustafa-mazin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="text-[#b6b6b6] hover:text-[#03b57b]" />
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-2">Payam</span>
                <a
                  href="https://github.com/PayamRasho"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="text-[#b6b6b6] hover:text-[#03b57b]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/payam01/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="text-[#b6b6b6] hover:text-[#03b57b]" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Link
              href="https://github.com/202401-GIZ-IQ-FSW/movie-project-fight-club"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FiGithub className="text-[#b6b6b6] hover:text-[#03b57b] mr-5 text-xl" />
              <span className="text-[#b6b6b6]">Main Repo</span>
            </Link>
          </div>
        </div>

        <div className="text-[#b6b6b6] text-xs  text-center py-2">
          <p>&copy; 2024 Fight Club. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </footer>
  );
}
