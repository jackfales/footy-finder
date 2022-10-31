import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CreateGameModal from './CreateGameModal';
import GamePreview from './GamePreview';

const GamePreviewData = [
  {
    title: 'Game 1',
    description: 'Description 1',
  },
  {
    title: 'Game 2',
    description: 'Description 2',
  },
];

export default function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {GamePreviewData &&
        GamePreviewData.length > 0 &&
        GamePreviewData.map((gamePreviewData) => (
          <GamePreview GamePreviewData={gamePreviewData} />
        ))}
      <Button onClick={toggleModal}>Create New Game</Button>
      <CreateGameModal show={showModal} onHide={toggleModal} />
    </div>
  );
}
