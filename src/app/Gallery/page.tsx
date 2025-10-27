"use client";
import { useRef } from "react";
import Card from "../components/GalleryCard";
import { contentContainerClass } from "../components/layoutTokens";
import Pagination, { usePagination } from "../components/Pagination";

const data = [
  {
    title: "libas",
    content: "contene",
    image: "/adsfa",
    day: "day1",
    vector: "asd",
  },
  {
    title: "libas",
    content: "contene",
    image: "/adsfa",
    day: "day1",
    vector: "asd",
  },
  {
    title: "photog",
    content: "contene",
    image: "/adsfa",
    day: "day1",
    vector: "asd",
  },
  {
    title: "libas",
    content: "contene",
    image: "/adsfa",
    day: "day1",
    vector: "asd",
  },
  {
    title: "libas0",
    content: "contene",
    image: "/adsfa",
    day: "day1",
    vector: "asd",
  },
  {
    title: "Tech Event",
    content: "contene",
    image: "/adsfa",
    day: "day2",
    vector: "asd",
  },
  {
    title: "Dance Night",
    content: "contene",
    image: "/adsfa",
    day: "day2",
    vector: "asd",
  },
  {
    title: "Art Show",
    content: "contene",
    image: "/adsfa",
    day: "day2",
    vector: "asd",
  },
  {
    title: "Music Fest",
    content: "contene",
    image: "/adsfa",
    day: "day3",
    vector: "asd",
  },
  {
    title: "Drama Play",
    content: "contene",
    image: "/adsfa",
    day: "day3",
    vector: "asd",
  },
  {
    title: "Gaming Arena",
    content: "contene",
    image: "/adsfa",
    day: "day3",
    vector: "asd",
  },
  {
    title: "Fashion Walk",
    content: "contene",
    image: "/adsfa",
    day: "day3",
    vector: "asd",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Pagination: 1 item per page (carousel style)
  const {
    currentItems: paginatedImages,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePagination(data, 1);

  return (
    <div
      ref={sectionRef}
      className="flex min-h-screen w-full items-center justify-center py-24"
    >
      <div
        className={`${contentContainerClass} flex flex-col items-center justify-center gap-6`}
      >
        <h1 className="mb-12 text-center text-5xl font-bold tracking-tight text-white sm:text-6xl">
          GALLERY
        </h1>

        {/* Single Card Display */}
        {paginatedImages[0] && (
          <Card
            title={paginatedImages[0].title}
            content={paginatedImages[0].content}
            image={paginatedImages[0].image}
            day={paginatedImages[0].day}
            vector={paginatedImages[0].vector}
          />
        )}

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          sectionRef={sectionRef}
          className="mt-8"
        />
      </div>
    </div>
  );
}
