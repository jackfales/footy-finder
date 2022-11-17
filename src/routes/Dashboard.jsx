import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getAllGamePreviews } from '../api';
import CreateGameModal from './CreateGameModal';
import GamePreview from './GamePreview';

export default function Dashboard() {
  const [gamePreviews, setGamePreviews] = useState([]);
  const [showCreateGameModal, setShowCreateGameModal] = useState(false);

  const fetchGamePreviews = async () => {
    const docs = await getAllGamePreviews();
    docs.forEach(doc => {
      const data = doc.data();
      data.id = doc.id;
      data.date_time = data.date_time.toDate().toString();
      setGamePreviews([...gamePreviews, data]);
    })
  };

  const toggleCreateGameModal = () => {
    setShowCreateGameModal(!showCreateGameModal);
  };

  useEffect(() => {
    fetchGamePreviews();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {gamePreviews &&
        gamePreviews.map((gamePreviewData) => (
            <GamePreview GamePreviewData={gamePreviewData} />
        ))}
      <Button onClick={toggleCreateGameModal}>Create New Game</Button>
      <CreateGameModal show={showCreateGameModal} onHide={toggleCreateGameModal} />
    </div>
  );
}
