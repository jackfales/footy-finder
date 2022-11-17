import { signInWithGoogle } from '../api';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;



export default function LoginPage() {

  const navigate = useNavigate();

  const signInAndRedirect = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.log("Error signing in");
    }
  }

  return (
    <StyledContainer>
      <StyledDiv>
        <h1>Login</h1>
        <Button variant="primary" onClick={signInAndRedirect}>
          Sign In With Google
        </Button>
      </StyledDiv>
    </StyledContainer>
  );
}
