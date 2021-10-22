import { faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../styles/Details.scss";
// Hook permettant de récupèrer les paramètres d'url
import { useParams } from "react-router-dom";
import axios from "axios";
// hook react pour gérer les effects de board et les états
import { useEffect, useState } from "react";
const url = "http://localhost:1337";
const Details = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  // on utilise le destructuring pour récupèrer l'id passé en paramètre d'url
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      // appel axios en synchrone
      const response = await axios.get(
        `http://localhost:1337/products/${id}`
      );
      // récupération des data dans le réponse par destructuration
      const data  = response;
      setProduct(data.data);

      setLoading(false);
    };

    getProduct();
  }, []);
  // affiche le loader si les données sont en cours de chargement, sinon on affiche les détails.
  return loading ? (
    <p>chargement ...</p>
  ) : (
    <article className="single-card">
      <div className="card">
        <div className="card__photo">
          <img src={url+product.image[0].url} alt={`photo de ${product.title}`} />
        </div>
        <div className="card__body">
          <h2 className="card__heading">
            {product.title}
          </h2>
          <div className="card__content">
            <p>{product.description}</p>
            <p>{product.price} €</p>
            <hr/>
            {/* utilisation d'un composant card l'affichage des épisodes nécessitent des appels api et du traitement. */}
          </div>
          <div className="card__content">
            <button>panier</button>
            <button>fav</button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Details;
