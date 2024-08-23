// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"
import DogImage from "./DogImage"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState("")
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    fetch(
      "https://dog.ceo/api/breeds/list/all",
      {method: "GET"}
    ).then(response => {
      if (response.ok){
        return response.json()
      }
      throw new Error(`リクエストエラー ${response.status}`)
    }).then(dogList => {
      var dogListArray = Object.keys(dogList.message)
      // @ts-ignore
      setBreeds(dogListArray)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  // console.log(breeds)

  // @ts-ignore
  const handleDogList = (e) => {
    setSelectedBreed(e.target.value)
  }

  // ${selectedBreed}をbulldogとした(初期値を設定した)ところ、テストは通った
  const selectDogImages = async () => {
    await fetch(
      `https://dog.ceo/api/breed/${selectedBreed}/images/random/3`,
    ).then(response => {
      if (response.ok){
        // console.log(response)
        return response.json()
      }
      throw new Error(`リクエストエラー ${response.status}`)
    }).then(data => {
      console.log(data.message)
      setDogImages(data.message)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={handleDogList}
      />
      <button onClick={() => selectDogImages()}>
        表示
      </button>
      {dogImages.map((dogImage, index) => (
        <DogImage key={index} imageUrl={dogImage}/>
      ))}
    </div>
  )
}

export default DogListContainer
