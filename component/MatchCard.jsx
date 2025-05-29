export default function MatchCard({ match }) {
  const date = new Date(match.matchDateTime);
  return (
    <div className="bg-gray-300  border border-white/20 text-white p-6 rounded-xl transition duration-300 ease-in-out hover:bg-gradient-to-br from-orange-400 via-amber-400 to-grey  hover:scale-105">
      <h2 className="text-lg font-semibold mb-2 text-blue-700">
        {match.team1?.teamName} <span className="text-gray-600">vs</span>{" "}
        {match.team2?.teamName}
      </h2>
      <p className="text-sm text-gray-800">
        📅 {date.toLocaleDateString()} 🕒{" "}
        {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
    </div>
  );
}
