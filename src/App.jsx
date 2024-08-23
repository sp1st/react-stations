// DO NOT DELETE

import './App.css'
import {useState} from 'react'

/**
 * @type {() => JSX.Element}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg'
  )
  
  const dogAPI = async () => {
    await fetch(
      "https://dog.ceo/api/breeds/image/random", 
      {method: "GET"}
    ).then(response => {
      if (response.ok){
        // console.log(response)
        return response.json()
      }
      throw new Error(`リクエストエラー ${response.status}`)
    }).then(data => {
      console.log(data.message)
      setDogUrl(data.message)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <main>
        <h2>犬の画像を表示するサイトです</h2>
        <img 
          src={dogUrl}
          alt="犬の画像" 
        />
        <button onClick={() => dogAPI()}>
            更新
        </button>
      </main>
    </div>
  )
}
