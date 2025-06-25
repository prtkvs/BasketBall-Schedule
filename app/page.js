"use client";

import { useEffect, useState } from "react";
import MatchCard from "@/component/MatchCard";

export default function HomePage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const res = await fetch("/api/matches");
      const data = await res.json();
      // console.log("API response:", data); // checking purposes
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-4 py-10">
      <main className="p-6 max-w-4xl mx-auto">
        <div className="flex justify-center items-center mb-4 text-7xl">⛹️</div>
        <h1 className="text-4xl font-semibold mb-8 text-center text-white tracking-wide">
          <span className="inline-block border-b-4 border-b-blue-950 text-indigo-200 pb-0.5">
            🏀 Upcoming Basketball Matches - 2025/26
          </span>
        </h1>

        <div className="space-y-4">
          {matches.length === 0 ? (
            <p className="text-center text-gray-500">Loading matches...</p>
          ) : (
            matches.map((match) => {
              console.log("Match:", match); 
              return (
                <MatchCard
                  key={`${match.team1?.teamName}-${match.team2?.teamName}-${match.matchDateTime}`}
                  match={match}
                />
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
