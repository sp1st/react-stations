
export const DogImage = (props) => {
  console.log(props)
  return (
    <img 
      // eslint-disable-next-line react/prop-types
      src={props.imageUrl}
      alt="犬の画像" 
    />
  )
}

export default DogImage
