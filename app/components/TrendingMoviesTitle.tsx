import React from "react";

export default function TrendingMoviesTitle({ item }: { item: Movie }) {
  return (
    <div className=" bg-main/60 absolute bottom-0 w-full pb-3 pt-4 px-3">
      <h5 className="font-medium">
        {item.original_name ? item.original_name : item.original_title}
      </h5>
      <h6 className="font-thin">
        {item.release_date
          ? item.release_date.slice(0, -6)
          : item.first_air_date.slice(0, -6)}
      </h6>
    </div>
  );
}
