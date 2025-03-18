import {
  MDBBtn,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';

const InstitutosTable = ({ institutos, setInstitutos }) => {
  const getInstitutos = (event) => {
    fetch('http://localhost:3000/institutos')
      .then((response) => response.json())
      .then((data) => {
        setInstitutos([...data]);
      })
      .catch((error) => {
        console.log('Deu erro!');
      });
  };

  useEffect(getInstitutos, []);

  return (
    <>
      <MDBTable hover>
        <MDBTableHead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Estado</th>
            <th scope="col">Cidade</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {institutos.map((institutos, i) => {
            return (
              <tr key={i}>
                <td>{institutos.nome}</td>
                <td>{institutos.estado}</td>
                <td>{institutos.cidade}</td>
                <td>
                  <MDBBtn floating tag="a" className="mx-2">
                    <MDBIcon fas icon="pen" />
                  </MDBBtn>

                  <MDBBtn 
                    floating tag="a" className="mx-2" color="danger">
                    <MDBIcon fas icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
    </>
  );
};

export default InstitutosTable;
