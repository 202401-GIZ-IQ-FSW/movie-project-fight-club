import Image from "next/image";
import React from "react";

export default async function MoviePage({ params }) {
  //async for server side
  const movieId = params.id;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className="">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[300px] opacity-100"></div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
          className="  absolute top-0 left-0 h-[60hv] w-screen"
          style={{ maxWidth: "100%", zIndex: -1 }}
          layout="fill"
          objectFit="cover"
        ></Image>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100"></div>
      </div>

      <div className="pr-20 pl-20 pt-10 bg-opacity-75 rounded-lg flex flex-col mt-96 relative text-[#d5d5d5]  ">
        <h2 className="font-bold text-2xl mb-3">{movie.title}</h2>
        <p className="text-lg mb-3">{movie.overview}</p>
        <div className="flex gap-8">
          <p className="mb-3">
            <span className="font-semibold mr-1">Released Date: </span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="text-[#b6b6b6]">
            <span className="font-semibold mr-1">Rating: </span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
