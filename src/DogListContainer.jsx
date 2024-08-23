// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([[]])
  const [selectedBreed, setSelectedBreed] = useState("")

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
  console.log(breeds)

  // @ts-ignore
  const handleDogList = (e) => {
    setSelectedBreed(e.target.value)
  }

  return (
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      setSelectedBreed={handleDogList}
    />
  )
}

export default DogListContainer
