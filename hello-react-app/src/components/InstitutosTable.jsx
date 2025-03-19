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
            <th scope="col">Escola</th>
            <th scope="col">Região</th>
            <th scope="col">Estado</th>
            <th scope="col">Município</th>
            <th scope="col">Mesorregião</th>
            <th scope="col">Microrregião</th>
            <th scope="col">Matrículas</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {institutos.map((institutos, i) => {
            return (
              <tr key={i}>
                <td>{institutos.Escola}</td>
                <td>{institutos.Região}</td>
                <td>{institutos.Estado}</td>
                <td>{institutos.Município}</td>
                <td>{institutos.Mesorregião}</td>
                <td>{institutos.Microrregião}</td>
                <td>{institutos.Matrículas}</td>
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
