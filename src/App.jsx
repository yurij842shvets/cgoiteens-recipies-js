import './App.css'
import Recipe from './Recipe'
import recipesData from './recipes.json'

function App() {

  return (
    <>
      {recipesData.map((recipe, index) => {
        <Recipe key={index} recipe={recipe}/>
      })}
    </>
  )
}

export default App;
