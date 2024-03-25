"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10 text-[#b6b6b6]">
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-[#03b57b] " onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
