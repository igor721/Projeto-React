import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const ItemComponent = ({ id, onDelete }) => {
  return (
    <MDBBtn
      floating
      tag="a"
      className="mx-2"
      color="danger"
      onClick={() => onDelete(id)} // Chama a função de delete passando o id
    >
      <MDBIcon fas icon="trash-alt" />
    </MDBBtn>
  );
};

export default ItemComponent;
