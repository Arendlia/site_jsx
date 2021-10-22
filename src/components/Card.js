import {
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./../styles/Card.scss";
const Card = ({ product }) => {
  const url = "http://localhost:1337";
  return (
    <div className="card">
      <div className="card__photo">
        <img src={url+product.image[0].url} alt={`photo de ${product.title}`} />
      </div>
      <div className="card__body">
      <button>fav</button>
        <h2 className="card__heading">
          {product.title}
        </h2>
        <p className="card__content">
          {product.description}
        </p> 
        <p className="card__content"> 
          {product.price} € 
        </p>  
        <button>Panier</button>
        
        <p className="card__link">
         <Link to={`/details/${product.id}`}>
            Détails <FontAwesomeIcon icon={faArrowCircleRight} />
          </Link>
          
        </p>
      </div>
    </div>
  );
};

export default Card;
