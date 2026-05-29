import './NewsCard.css'

function NewsCard ({arcticle}) {
    return (
        <>
        <div className='card'>
            <h1>{arcticle.title}</h1>
            <img src={arcticle.image} className='main_img'/>
            <p>{arcticle.content}</p>
            <p>{arcticle.publicationDate}</p>
        </div>
        </>
    )
}

export default NewsCard