import Image from "next/image";
import React from "react";
import {
  MdDateRange,
  MdStar,
  MdAttachMoney,
  MdMonetizationOn,
} from "react-icons/md";
export default async function MoviePage({ params }) {
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
            movie.belongs_to_collection?.backdrop_path || movie.backdrop_path
          }`}
          alt=""
          className=" h-[60hv] w-screen"
          style={{ maxWidth: "100%", zIndex: -1 }}
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#323232] to-transparent opacity-100"></div>
      </div>

      <div className="pr-20 pl-20 pt-10 bg-opacity-75 rounded-lg flex flex-col mt-96 relative text-[#d5d5d5]">
        <div className="flex flex-row">
          <div className=" m-auto flex justify-center" style={{ width: "40%" }}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
              }`}
              alt=""
              layout="fill"
              objectFit="cover"
              style={{
                position: null,

                zIndex: 1,
                borderRadius: "20px",
                maxWidth: "90%",
                // maxHeight: "50%",
                left: null,
                top: null,
                right: null,
                bottom: null,
              }}
            />
          </div>
          <div
            className="flex justify-center flex-col"
            style={{ width: "60%" }}
          >
            <h2 className="font-bold text-2xl mb-3">{movie.title}</h2>
            <p className="text-lg mb-3">{movie.overview}</p>
          </div>
        </div>
        <div className="flex gap-8 mb-3">
          <div className=" pt-3">
            <p className="flex p-2  flex-row items-center">
              <MdDateRange className="mr-2  text-xl" />
              <span className="font-semibold">Released Date:</span>{" "}
              {movie.release_date}
            </p>
            <p className="flex p-2  flex-row items-center">
              <MdStar className="mr-2  text-xl" />
              <span className="font-semibold">Rating:</span>{" "}
              {movie.vote_average}
            </p>
          </div>
          <div className=" pt-3">
            <p className="flex p-2  flex-row items-center">
              <MdMonetizationOn className="mr-2  text-xl" />
              <span className="font-semibold">Budget:</span> $
              {movie.budget.toLocaleString()}
            </p>
            <p className="flex p-2  flex-row items-center">
              <MdAttachMoney className="mr-2  text-xl" />
              <span className="font-semibold">Revenue:</span> $
              {movie.revenue.toLocaleString()}
            </p>
          </div>
        </div>
        <p className="mb-3">{movie.tagline}</p>
        <div className="flex flex-wrap gap-4 mb-3">
          <span className="font-semibold">Genres:</span>
          {movie.genres.map((genre) => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </div>
        <p className="pb-3">
          <span className="font-semibold mr-1">Homepage: </span>
          <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
            {movie.title}
          </a>
        </p>
        <div className="flex gap-4 mb-3 flex-col ">
          <span className="font-semibold">Production Companies:</span>
          <div className=" flex flex-row justify-around items-end flex-wrap gap-8">
            {movie.production_companies.map((company) => (
              <div key={company.id} className=" ">
                <div className=" flex flex-col items-baseline">
                  {company.logo_path && (
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      alt={`${company.name} Logo`}
                      width={70}
                      height={70}
                      className="m-auto pb-2"
                    />
                  )}
                  <span className="text-xs m-auto">{company.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
