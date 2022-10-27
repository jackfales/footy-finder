import { Card } from 'react-bootstrap';

export default function GamePreview(GamePreviewData) {
  return (
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Header>{GamePreviewData.GamePreviewData.title}</Card.Header>
      <Card.Body>
        <Card.Text>{GamePreviewData.GamePreviewData.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
