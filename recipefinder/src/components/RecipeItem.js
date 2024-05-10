import '../styles/index.css'
import { connect } from 'react-redux'
import { favoriteRecipe } from '../actions';
import { useState } from 'react';

function RecipeItem(props) {
    const [favorited, setFavorited] = useState(false);

    let { recipe } = props.recipe

    const favorite = (recipe) => {
        props.favoriteRecipe(recipe);
        setFavorited(true);
    }

    return ( 
        <div className="recipe-item">
            {
                props.favoriteButton ?
                    favorited ?
                    <div className="star">&#9733;</div>
                    :
                    <div 
                        className='star'
                        onClick={() => favorite(props.recipe)}
                    >
                        &#9734;
                    </div>
                :
                    <div></div>
            }
            <div className="recipe-text">
                <a href={recipe.url}>
                    <h4>{recipe.label}</h4>
                </a>
            <p>{recipe.ingredientLines}</p>
            </div>
            <img 
                src= {recipe.image} 
                alt= {recipe.label} 
                className="recipe-img"
            />
        </div>
        
     );
}

export default connect(null, { favoriteRecipe })(RecipeItem);