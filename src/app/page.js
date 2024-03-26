import Results from "@/components/Results";
import React from "react";

const API_KEY = process.env.API_KEY;
export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();

  //   const res = await new Promise((resolve) => {
  //     setTimeout(async () => {
  //         const response = await fetch(
  //             `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`
  //         );
  //         const data = await response.json();
  //         resolve(data);
  //     }, 2000); // Delay of 2 seconds
  // });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
