//import styles 
import { useState } from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { addFavorites, deleteFavorites } from '../../redux/actions';
import { useEffect } from 'react';

export function Card(props) {
   //console.log(props);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = (e) => {
      alert("Agregar a Favoritos")
      if(isFav) {
         setIsFav(false);
         deleteFavorites(props.id);
      } else {
         setIsFav(true);
         addFavorites(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach(favoritos => {
         if(favoritos.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   return (
      <div className={styles.card} id={props.id} key={props.id}>
         <div>
            {
               isFav ? (
                  <button  onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
               
            <button onClick={props.onClose}>X</button>
         </div>
         <div>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <img  src={props.image} alt={props.name} />
         </div>
         <div>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites: function (payload) {
         dispatch(addFavorites(payload));
      },

      deleteProduct: function (id) {
         dispatch(deleteFavorites(id));
      },
   };
}

export default connect(null, mapDispatchToProps)(Card);