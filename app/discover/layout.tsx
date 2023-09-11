import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Discover Movies",
  description:
    "Millions of movies, TV shows and people to discover. Explore now.",
};
export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="pl-4 md:pl-60 pr-4 w-full">{children}</div>;
}
