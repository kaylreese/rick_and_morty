import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail(){
    const { detailId } = useParams();
    const navigate = useNavigate();
    console.log(detailId);

    const [character, setCharacter] = useState();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((char) => {
              if (char.name) {
                 setCharacter(char);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
        return setCharacter({});
     }, [detailId]);

    const backToHome = () => {
        navigate("/home");
    }

    return (
        <div>
            <br/>
            <button className={styles.btnregresar} onClick={backToHome}>Regresar</button>
            { character ? (
                <div>
                    <div>
                        <h1>{character.name}</h1>
                        <h5><span>Status: </span> {character.status}</h5>
                        <h5><span>Specie: </span> {character.specie}</h5>
                        <h5><span>Gender: </span> {character.gender}</h5>
                        <h5><span>Origin: </span> {character.origin?.name}</h5>
                    </div>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                </div>
            ) : ( 
                ""
            )}
        </div>
    );
}