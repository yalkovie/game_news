import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import CardNews from './components/NewsCard/NewsCard'
import './App.css'
import NewsCard from './components/NewsCard/NewsCard'

function App() {

  let [isGame, setIsGame] = useState(true)
  let [games, setGames] = useState([])
  let [news, setNews] = useState([])

  useEffect(() => {
    // Загрузка данных об играх
    fetch( 'http://localhost:3000/games', {
        method: 'GET', // Метод запроса
        headers: { 'Content-Type': 'application/json'}  // Указываем тип содержимого
    })
    .then(response => response.json()) // Получаем ответ в формате JSON
    .then(data => {
        setGames(data)
    })

    // Загрузка новостей
    fetch( 'http://localhost:3000/news', {
        method: 'GET', // Метод запроса
        headers: { 'Content-Type': 'application/json'}  // Указываем тип содержимого
    })
    .then(response => response.json()) // Получаем ответ в формате JSON
    .then(data => {
        setNews(data)
    })
      }, [])

  function changer_st(state) {
    setIsGame(state)
  }

  return (
    <>
    <header>
      <div>
        <img src="./images/logo.png" alt="logo" />
        <h1>GameSpy</h1>
      </div>
      <p>Следим за новинками игр</p>
    </header>
    <nav>
      <ul>
        <li><a onClick={() => changer_st(true)}>Игры</a></li>
        <li><a onClick={() => changer_st(false)}>Новости</a></li>
      </ul>
    </nav>
    <h2>{isGame === true ? 'Игры' : 'Новости'}</h2>
    <main>
      {isGame === true ? games.map((game, id) => <Card key={id} game={game}/>) : news.map((arcticle, id) => <NewsCard key={id} arcticle={arcticle}/>)}
    </main>
    </>
  )
}

export default App
