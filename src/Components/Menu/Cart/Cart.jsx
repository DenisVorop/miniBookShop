
//========================================================================================================================================================

const Cart = (props) => {
    return (
        <li>
            <div className='cart__row'>
                <div className=''>
                    <img src={props.image} alt="" />
                </div>
                <div className='cart__margin'>
                    <span>{props.title}</span>
                </div>
                <button onClick={props.removeBook.bind(this, props.id)}>Удалить</button>
            </div>
        </li>

    )
}

//========================================================================================================================================================

export default Cart;
