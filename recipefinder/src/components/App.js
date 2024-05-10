import SearchRecipes from "./SearchRecipes";
import RecipeList from "./RecipeList";

import '../styles/index.css'

function App() {
  return (
    <div className="App">
      <h2>Recipe Finder</h2>
      <SearchRecipes />
      <RecipeList />
    </div>
  );
}

export default App;
