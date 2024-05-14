import "./game-item.css"
export const GameItem = () => {
    return (
        <div className="item">
         <div className="item__top">
         <img className="item__poster" src="#" alt="game poster" />
            <div>
                <h3>Название игры</h3>
            </div>
         </div>
            <div className="item__bottom">
                <h4>Рейтинг: </h4>
                <p>10.0</p>
            </div>
        </div>
    )
}