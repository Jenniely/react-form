import React, { useContext, useState} from "react";
import ReactStars from "react-rating-stars-component";
/* import {CartContext} from "../contexts/CartContext"; */
import {Link} from "react-router-dom";


const ProductItem = ({item}) => {
  /* const {cartItems, addProduct, increase} = useContext(CartContext); */
  const [qty, setQty] = useState(1);

  /* const isInCart = product => {
    return !!cartItems.find(item => item.id === product.id);
  }

  
 */
const add = () => {
    console.log('add');
  }
  return (
    <div className="product mb-2 mt-2" key={item.id}>
      <div className="product_regular">
        <img src={item.medias[0].link} alt=""/>
        <span>{item.price} руб</span>
      </div>
      <div className="product_hover mb-2 mt-2">
        <div className='name'>{item.name}</div>
        <div className='desc'>{item.description}</div>
        {item.category_id === 1 &&
        <div className="coffee_desc">
          {<div className="acidity">
            <span>Кислотность</span>
            <ReactStars size={40}
                        char="-"
                        value={Math.round((0.06 * parseInt(item.acidity.title)))}
                        edit={false}
                        color="lightgrey"
                        activeColor="black"
                        count={6}
                        classNames="rating"/>
          </div>}
          <div className="options">
            <select
              defaultValue={0}
              name="category_id"
              id="category_id">
              {item.packings.map((p) => <option value={item.id}>{item.title}</option>)}
            </select>
            <select
              defaultValue={0}
              name="category_id"
              id="category_id">
              <option value={item.id}>не молоть</option>
            </select>
          </div>

        </div>}
        <div className='price'>
          <span>{item.price} руб</span>
          <div>
            <button type="button"
                    className="btn btn-default btn-circle"
                    onClick={() => setQty(qty + 1)}>+
            </button>
            <span className="product_amount">{qty}</span>
            <button type="button"
                    className="btn btn-default btn-circle"
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-
            </button>
          </div>

        </div>
        <div className="control">
          <button className="blackBtn bg-transparent text-dark" type="submit">
           {/* { <Link to={`/product/${item.id}`}>Подробнее</Link>} */}Подробнее
          </button>
          <button className="blackBtn bg-transparent text-dark"
                  type="button"
                  onClick={add}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  )

};

export default ProductItem;