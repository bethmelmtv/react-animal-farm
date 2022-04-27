import './AnimalCard.css';


export default function AnimalCard({ animal }) {
  return (
    <>
      <div className = "animal-card">
        <h3>Name: {animal.name} </h3>
        <p>Type:{animal.type} </p>
        <p>Says:{animal.says} </p>
        <img src={`/png/${animal.type}.png`} />
      </div>
    </>
    
  );
}