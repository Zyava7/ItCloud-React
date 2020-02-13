import React from 'react';
import Modal from './Modal';

const handleModal = (clickedUser) =>{
    return <Modal
        user={clickedUser}
        />
};

const UserCard = (props) => {
    return(
        <a className="card" onClick={handleModal.bind(props.user)}>
            <h2>{props.user.name}</h2>
            <p>{props.user.age}</p>
            <p>{props.user.gender}</p>
            <p>{props.user.balance}</p>
        </a>
    );
};

export default UserCard;