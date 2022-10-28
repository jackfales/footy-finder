import { signInWithGoogle } from '../api';
import { Button } from 'react-bootstrap';

export default function LoginPage() {

  return (
    <div>
      <h1>Login</h1>
      <Button variant="primary" onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}
