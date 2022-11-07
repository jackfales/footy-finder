import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import GameModal from './GameModal';

export default function GamePreview(GamePreviewData) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div>
      <Card border="primary" style={{ cursor: 'pointer', width: '18rem' }} onClick={toggleModal}>
        <Card.Header>
          <Card.Title>{GamePreviewData.GamePreviewData.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <ListGroup>
            <ListGroup.Item>{GamePreviewData.GamePreviewData.date_time}</ListGroup.Item>
            <ListGroup.Item>{GamePreviewData.GamePreviewData.players_per_team} v {GamePreviewData.GamePreviewData.players_per_team}</ListGroup.Item>
            <ListGroup.Item>{GamePreviewData.GamePreviewData.location.city}, {GamePreviewData.GamePreviewData.location.state}</ListGroup.Item>
          </ListGroup>
          <Card.Text>{GamePreviewData.GamePreviewData.description}</Card.Text>
        </Card.Body>
      </Card>
      <GameModal GamePreviewData={GamePreviewData} show={showModal} onHide={toggleModal}/>
    </div>
  );
}
