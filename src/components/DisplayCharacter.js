const DisplayCharacter = ({ character }) => {
  return (
    character && (
      <div className='DisplayCharacter'>
        <h1>{character.character}</h1>
        <p>{character.quote}</p>
        <img src={character.image} alt={character.character}></img>
      </div>
    )
  );
};

export default DisplayCharacter;
