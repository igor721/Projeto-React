import { Row } from 'react-bootstrap';
import InstitutoCard from './InstitutoCard';
import institutos from '../datasets/institutos';

const InstitutosCard = () => {
  let institutosData = [...institutos
  
  ];
  return (
    <>
      <Row>
        {institutosData.map(({ imagem, nome, descricao }, indice) => {
          return (
            <InstitutoCard
              key={indice}
              imagem={imagem}
              nome={nome}
              descricao={descricao}
            />
          );
        })}
      </Row>
    </>
  );
};

export default InstitutosCard;
