import { connect } from "react-redux";
import { removeCharacterById } from "../actions";

function HeroList(props) {
    return ( 
        <div>
            <h4>Your Hero Squad: </h4>
            <ul className="list-group">
                {
                    props.heroes.map(hero => {
                        return (
                            <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                    {hero.name}
                                </div>
                                <div className="list-item right-button" 
                                    onClick={() => props.removeCharacterById(hero.id)}
                                >
                                    x
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
     );
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    }
}

export default connect(mapStateToProps, {removeCharacterById} )(HeroList);