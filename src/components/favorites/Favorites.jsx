import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";


export function Favorites(props){
    // console.log(props.myFavorites);

    const { myFavorites, onClose } = props;
    const navigate = useNavigate();
    
    return(
        <div>
            {
                myFavorites.map((character) => (
                    <Card 
                        id={character.id}
                        detailId={character.detailId}
                        name={character.name}
                        species={character.species}
                        gender={character.gender}
                        image={character.image}
                        onClose={() => onClose(character.id)}
                    />)
                )
            }
        </div>
    );
}

export function mapDispatchToProps(state) {
    console.log(state.myFavorites);
    return {
        myFavorites: state.myFavorites
    };
}

export default connect(mapDispatchToProps, null)(Favorites);