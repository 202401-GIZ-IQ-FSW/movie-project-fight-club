import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-lg sm:border sm:border-slate-600 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <div className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              result.backdrop_path || result.poster_path
            }`}
            width={800}
            height={400}
            className="sm:rounded-t-lg group-hover:opacity-35 transition-opacity duration-300"
            alt="image"
          ></Image>
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-45"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h2 className="text-white text-lg  font-bold truncate flex justify-center items-center  ">
              {result.title || result.name}
            </h2>
            <div className="flex items-end  text-white justify-between">
              <div className="flex items-center">
                <FiThumbsUp className="mr-2" />
                <p className="text-xs">{result.vote_count}</p>
              </div>
              <p className="text-white text-xs">
                {result.release_date || result.first_air_date}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
