"use client";

import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param, Icon }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <>
      <Link
        className={`uppercase hidden sm:inline text-sm hover:text-[#03b57b] text-[#b6b6b6] ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-[#03b57b] rounded-lg"
            : ""
        } `}
        href={`/?genre=${param}`}
      >
        <Icon className="text-2xl sm:hidden" />
        {title}
      </Link>
    </>
  );
}
