import '/src/components/Character/Character.css'

export default function Character(character) {

  

  return (
    <div className="gallery align-items-center justify-content-center">
      <div className="card mb-3" style={{ width: '350px', height: 'auto' }}>
        <img src={character.image} className="card-img-top" alt={character.name} style={{ width: '100%', height: 'auto' }} />
        <div className="info card-body bg-dark">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{`Origin: ${character.origin && character.origin.name}`}</p>
          <p className="price">100€</p>
          <button className="character-btn" >Añadir al Carrito<span className="material-symbols-outlined">shopping_cart</span></button>
        </div>
      </div>
    </div>
    
  );
}

