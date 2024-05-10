import { connect } from "react-redux";
import RecipeItem from './RecipeItem'
import { Link } from "react-router-dom";

function FavoriteRecipeList(props) {
    
    let  favoriteRecipes  = props.favoriteRecipes;
    return (
        <div>
            <h4 className="link"><Link to='/'>Home</Link></h4>
            <h4>Favorite Recipes:</h4>
            {
                favoriteRecipes.map((recipe, index) => {
                    return (
                        <RecipeItem 
                            key={index} 
                            recipe= {recipe}
                            favoriteButton={false}
                        />
                    )
                })
            }
        </div>

        
     );
}

function mapStateToProps(state) {
    return {
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(FavoriteRecipeList);