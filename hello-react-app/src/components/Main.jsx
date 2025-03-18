import { Carousel, Container } from 'react-bootstrap';
import InstitutosCard from './InstitutosCard';

const Main = () => {
  return (
    <main>
      <Container fluid className="mt-2">
        {/* Institutos */}
        <InstitutosCard />
      </Container>
    </main>
  );
};

export default Main;
