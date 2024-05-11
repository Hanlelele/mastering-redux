import { connect } from "react-redux";

function myMemes(props) {
    return ( 
        <div>
            {
                props.myMemes.map((meme, index) => {
                    return (
                        <img 
                            key={index}
                            src={meme.data.url}
                            alt="my-meme"
                            className="my-meme-img"
                        />
                    )
                })
            }
        </div>
     );
}

function mapStateToProps(state) {
    return {
        myMemes: state.myMemes
    }
}
export default connect(mapStateToProps, null)(myMemes);