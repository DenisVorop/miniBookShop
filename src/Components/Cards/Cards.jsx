import './Cards.scss';

//========================================================================================================================================================

const Cards = (book) => {
    return (
        <div className="card">
            <div className="card__item item-card">
                <div className='item-card__ita'>
                    <div className="item-card__image">
                        <img src={book.image} alt="" />
                    </div>
                    <div className='item-card__ta'>
                        <div className="item-card__title">
                            <b>{book.title}</b>
                        </div>
                        <div className="item-card__author">
                            {book.author}
                        </div>
                        <div className='item-card__description'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem natus placeat quibusdam omnis aperiam error reiciendis deleniti at?
                        </div>
                    </div>
                </div>
                <div className="item-card__price">
                    <div className='rub'>&#8381; {book.price}</div>
                    <div></div>
                </div>
                <div className="item-card__button">
                    <button onClick={book.addBook.bind(this, book)}>В корзину {book.addedCount > 0 && `(${book.addedCount})`} </button>
                </div>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Cards;
