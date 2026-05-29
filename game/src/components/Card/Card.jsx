import './Card.css'

function Card ({game}) {
    return (
        <>
        <div className='card'>
            <h1>{game.title}</h1>
            <h2>Разработана {game.developer} в {game.releaseYear} году</h2>
            <img src={game.mainImage} className='main_img'/>
            <p>Жанр: {game.genre}</p>
            {game.descriptions.map((txt, id) => <p key={id}>{txt}</p>)}
            <div className='images'>
                {game.images.map((img, id) => <img key={id} src={img}></img>)}
            </div>
        </div>
        </>
    )
}

export default Card