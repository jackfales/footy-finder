import { Card, ListGroup } from 'react-bootstrap';

export default function GamePreview(GamePreviewData) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
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
  );
}
