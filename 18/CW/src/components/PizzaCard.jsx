import React from 'react';

const PizzaCard = (props) => {
    return(
        <div className="card">
            <h2>{props.pizza.name}</h2>
            <p>{props.pizza.composition}</p>
            <p>{props.pizza.caloricity}</p>
            <p>{props.pizza.price}</p>
        </div>
    );
};

export default PizzaCard;