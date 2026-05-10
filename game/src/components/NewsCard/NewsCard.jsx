import './NewsCard.css'

function NewsCard ({arcticle}) {
    return (
        <>
        <div>
            <h1>{arcticle.title}</h1>
            <img src={arcticle.image}/>
            <p>{arcticle.content}</p>
            <p>{arcticle.publicationDate}</p>
        </div>
        </>
    )
}

export default NewsCard