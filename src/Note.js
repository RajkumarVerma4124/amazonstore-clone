import React from "react";
import Zoom from '@material-ui/core/Zoom';
import CheckoutProduct from "./CheckoutProduct";
import "./Note.css"
import { useStateValue } from "./StateProvider";


function Note({id,title,image,price,rating}) {
const [{basket},dispatch]= useStateValue();


  return (
    <Zoom in={true}>
    <div className="note">
        <CheckoutProduct id={id}
            image={image}
            title={title}
            price={price}
            rating={rating}              
            />
        
    </div>
    </Zoom>
  );
}

export default Note;