import './Filter.scss';

//========================================================================================================================================================

const Filter = (props) => {
    return (
        <div className="filter">
            <div>
                <div>
                    <button onClick={props.setFilter.bind(this, 'all')}>Все</button>
                </div>
                <div>
                    <button onClick={props.setFilter.bind(this, 'price_high')}>По цене (уменьшение)</button>
                </div>
                <div>
                    <button onClick={props.setFilter.bind(this, 'price_low')}>По цене (увеличение)</button>
                </div>
                <div>
                    <button onClick={props.setFilter.bind(this, 'author')}>По автору</button>
                </div>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Filter;
