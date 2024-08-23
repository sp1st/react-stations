// @ts-check

import { useState } from "react"
import DogImage from "./DogImage"

export const Description = () => {
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
    <main>
      <h2>犬の画像を表示するサイトです</h2>
      <DogImage imageUrl={dogUrl}/>
      <button onClick={() => dogAPI()}>
        更新
      </button>
    </main>
  )
}

export default Description
