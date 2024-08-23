/* eslint-disable react/prop-types */

export const BreedsSelect = ({breeds, selectedBreed, setSelectedBreed}) => {

  // const handleSelectedBreed = (e) => {
  //   setSelectedBreed(e.target.value)
  // }

  return (
    <select value={selectedBreed} onChange={setSelectedBreed}>
    {/* <select value={selectedBreed} onChange={setSelectedBreed}> */}
      <option value="" selected>--Please choose an option--</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
