const DisplayCharacter = ({ character }) => {
  return (
    character && (
      <>
        <h1>{character.character}</h1>
        <p>{character.quote}</p>
        <img src={character.image} alt={character.character}></img>
      </>
    )
  );
};

export default DisplayCharacter;
