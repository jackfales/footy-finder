import { signInWithGoogle } from '../api';
import { Button } from 'react-bootstrap';

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
  return (
    <StyledContainer>
      <StyledDiv>
        <h1>Login</h1>
        <Button variant="primary" onClick={signInWithGoogle}>
          Sign In With Google
        </Button>
      </StyledDiv>
    </StyledContainer>
  );
}
