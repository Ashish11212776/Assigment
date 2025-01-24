import { useContext } from "react";
import AchievementContext from "./AchivementContext"

export default function Achievement() {
    const achivment=useContext(AchievementContext)
  return (
    <div>
      {achivment && achivment.length > 0 ? (
        achivment.map((data, index) => (
          <h1 key={index}>{data}</h1>
        ))
      ) : (
        <p>No achievements found.</p>
      )}
    </div>
  );
}
