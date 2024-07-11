/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"


export default function Title( props ) {


    return (
      <Link to={props.link}>
      <div className="titulo">
        <h1>{props.info}</h1>
      </div>
      </Link>
    );
  }