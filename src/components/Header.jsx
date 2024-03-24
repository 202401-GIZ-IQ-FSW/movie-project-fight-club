"use client";
import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import NavbarItem from "./NavbarItem";
import SearchBox from "./SearchBox";
import { FiTrendingUp } from "react-icons/fi";
import { MdStarRate } from "react-icons/md";

export default function Header() {
  return (
    <div className="flex items-center justify-between p-3 max-w-6xl mx-auto bg-transparent  relative z-10 ">
      <Link href="/" className="flex items-center">
        <span className="text-2xl font-bold bg-[#03b57b] py-1 px-2 rounded-lg">
          Fight
          <span className="text-xl hidden sm:inline text-[#03b57b] pt-3 pb-2 bg-[#323232] rounded-2xl p-1">
            Club
          </span>
        </span>
      </Link>
      <div className="flex gap-4 items-center">
        <MenuItem title="Home" address="/" Icon={AiFillHome} param="home" />
        <NavbarItem
          title="Trending"
          param="fetchTrending"
          Icon={FiTrendingUp}
        />
        <NavbarItem title="Top Rated" param="fetchTopRated" Icon={MdStarRate} />
        <MenuItem
          title="About"
          address="/about"
          Icon={BsFillInfoCircleFill}
          param="about"
        />
      </div>
      <div>
        <SearchBox />
      </div>{" "}
    </div>
  );
}
