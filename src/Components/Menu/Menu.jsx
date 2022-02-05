import Cart from '../Cart/Cart';

import './Menu.scss';

//========================================================================================================================================================

const Menu = (props) => {

    return (
        <div className="menu">
            <div className="menu__row">
                <div className="menu__logo logo">
                    <div className="logo__title">
                        <label>
                            <b>Магазин книг</b>
                        </label>
                    </div>
                </div>
                <div className="menu__input input">
                    <div className="input__form">
                        <input
                            type="text"
                            placeholder='Очень философский инпут...'
                            value={props.searchQuery}
                            onChange={(e) => props.setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="menu__total total">
                    <div className="total__price price">
                        <div className="price__cart">
                            Итого: <b>{props.totalPrice}</b>
                        </div>
                    </div>
                </div>
                <div className="menu__cart cart">
                    <div className="cart__elements elements">
                        <div className="elements__cart">
                            Корзина (<b>{props.count}</b>)
                        </div>
                        <div className="cart__active">
                            <ul>
                                {props.items.map(book => <Cart key={book.id} {...book} />)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Menu;
