// @ts-check

import { useEffect, useState } from "react"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([[]])

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
      setBreeds(dogList.message)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  console.log(breeds)
}

export default DogListContainer
