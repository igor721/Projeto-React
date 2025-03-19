import { MDBInput, MDBTooltip } from 'mdb-react-ui-kit';
import InstitutosTable from '../components/InstitutosTable';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useState } from 'react';

const Institutos = () => {
  let [Institutos, setInstitutos] = useState([]);

  let [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  let [inputs, setInputs] = useState({
    nome: '',
    estado: '',
    cidade: '',
  });

  const handleChange = (event) => {
    let name = event.target.name;
    setInputs({ ...inputs, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //POST, PUT e DELETE
    fetch('http://localhost:3000/institutos', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => {
        if (response.ok) {
          //Adicionar na lista.
          setInstitutos([...Institutos, inputs]);
          //Fechar o modal.
          setShow(!show);
        }
      })
      .catch((error) => {});
  };

  return (
    <>
      <div>Institutos</div>

      <div>
        <Row>
          <Col>
            <MDBInput label="Buscar" id="formControlSm" type="text" size="sm" />
          </Col>
          <Col>
            <MDBTooltip
              tag="span"
              wrapperClass="d-inline-block"
              title="Adicionar Instituto"
            >
              <Button onClick={handleShow}>+</Button>
            </MDBTooltip>
          </Col>
        </Row>
      </div>

      {/* Clientes */}
      <InstitutosTable
        institutos={Institutos}
        setInstitutos={setInstitutos}
      ></InstitutosTable>

      <Modal
        show={show}
        onHide={handleShow}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Cadastrar</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sítio Aruara"
                id="nome"
                name="nome"
                value={inputs.nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                id="estado"
                name="estado"
                value={inputs.estado}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                id="cidade"
                name="cidade"
                value={inputs.cidade}
                onChange={handleChange}
              />
            </Form.Group>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleShow}>
              Fechar
            </Button>
            <Button variant="primary" type="submit">
              Adicionar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default Institutos;
