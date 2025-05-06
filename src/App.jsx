import Recipe from './Recipe';
import recipesData from './recipes.json'; // or fetch if in public folder

function App() {
  
  return (
    <div>
      {recipesData.map((recipe, index) => (
        <Recipe key={index} recipe={recipe} />
      ))}
    </div>
  );
}

export default App;