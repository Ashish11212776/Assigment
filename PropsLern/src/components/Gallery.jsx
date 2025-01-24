import Achivement from "./Achivment";
export default function Gallery({ listOfPeople }) {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {listOfPeople.map((person, index) => (
        <section className="profile" key={index}>
          <h2>{person.name}</h2>
          <img src={person.imgUrl} alt={person.name} />
          <ul>
          <li><strong>Profession:</strong> {person.profession}</li>
          <li><strong>Awards:</strong> {person.award}</li>
          <li><strong>Discovered:</strong> {person.discovered}</li>
          </ul>
        </section>
      ))}
     <Achivement/>
    </div>
  );
}
