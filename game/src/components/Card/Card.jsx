import './Card.css'

function Card ({game}) {
    return (
        <>
        <div>
            <h1>{game.title}</h1>
            <h2>Разработана {game.developer} в {game.releaseYear} году</h2>
            <img src={game.mainImage}/>
            <span>Жанр: {game.genre}</span>
            {game.descriptions.map((txt, id) => <p key={id}>{txt}</p>)}
            <div>
                {game.images.map((img, id) => <img key={id} src={img}></img>)}
            </div>
        </div>
        </>
    )
}

export default Card