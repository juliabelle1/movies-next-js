import React from "react";

export default function NowPlayingMoviesHover({
  release_date,
}: {
  release_date: string;
}) {
  return (
    <div className="absolute inset-0 z-10 bg-main/60 rounded-md border text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 ">
      <h3 className="font-bold">
        {Number(release_date.slice(5, -3)) >= 12 &&
        Number(release_date.slice(5, -3)) <= 2
          ? "Winter"
          : Number(release_date.slice(5, -3)) >= 3 &&
            Number(release_date.slice(5, -3)) <= 5
          ? "Spring"
          : Number(release_date.slice(5, -3)) >= 6 &&
            Number(release_date.slice(5, -3)) <= 8
          ? "Summer"
          : "Fall"}
      </h3>
      <h6>{release_date.slice(0, -6)}</h6>
    </div>
  );
}
