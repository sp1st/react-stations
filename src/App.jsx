// DO NOT DELETE

import './App.css'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <header>
        <h2>Dogアプリ</h2>
      </header>
      <main>
        <h2>犬の画像を表示するサイトです</h2>
        <img 
          src="https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg" 
          alt="犬の画像" 
        />
      </main>
    </div>
  )
}
