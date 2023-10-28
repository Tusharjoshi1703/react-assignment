
import React from "react";
import styled from "styled-components";
import loginImage from "./image/assignment-img.png"; // Import your image file

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f2f2f2;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 100px;
  border-radius: 5px;

  width: 80%;
  max-width: 500px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const LoginImage = styled.img`
  max-width: 100%;
  height: 40vh;
  @media (min-width: 768px) {
    max-width: 90%;
    height: 50vh;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0074d9;
  margin: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Logintext = styled.p`
  color: black;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;
const Checkbox=styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const Checkboxtext = styled.p`
  display: inline;
  margin-left: 2px;
  color: gray;
  font-size: small;
`;
const Checkboxdiv= styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -20px;
  
`
const Orangetext=styled.p`
  display: inline;
  font-size: small;
  margin-left: 2px;
  color: orange
`
function App() {
  return (
    <LoginContainer>
      <LoginForm>
        <ImageContainer>
          <LoginImage src={loginImage} alt="Login" />
        </ImageContainer>
        <FormContainer>
          <Logintext>Login</Logintext>
          <InputField type="text" placeholder="Username" />
          <InputField type="password" placeholder="Password" />
          <Checkbox>
          <Checkboxdiv>
            <input type="checkbox" />
            <Checkboxtext>Remember me</Checkboxtext>
          </Checkboxdiv>
          <Checkboxdiv>
            <input type="checkbox" />
            <Checkboxtext>Agree to </Checkboxtext><Orangetext>terms & conditions.</Orangetext>
          </Checkboxdiv>
          </Checkbox>
         
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      </LoginForm>
    </LoginContainer>
  );
}

export default App;
