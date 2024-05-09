import { connect } from "react-redux";

function SquadStats(props) {

    const calculateStrength = () => {
        let strength = 0;
        props.heroes.forEach(hero => strength += hero.strength);
        return strength;
    }

    const calculateIntelligence = () => {
        let intelligence = 0;
        props.heroes.forEach(hero => intelligence += hero.intelligence);
        return intelligence;
    }

    const calculateSpeed = () => {
        let speed = 0;
        props.heroes.forEach(hero => speed += hero.speed);
        return speed;
    }

    return ( 
        <div>
            <h4>SquadStats</h4>
            <ul>
                <li className="list-group-item">
                    <b>Overall Strength: </b>{calculateStrength()}
                </li>
                <li className="list-group-item">
                    <b>Overall Intelligence: </b>{calculateIntelligence()}
                </li>
                <li className="list-group-item">
                    <b>Overall Speed: </b>{calculateSpeed()}
                </li>
            </ul>
        </div>
     );
}

function mapStateToProps(state){
    return {
        heroes: state.heroes
    }
}
export default connect(mapStateToProps, null)(SquadStats);