import InputField from "../components/InputField";
import { StyledLogin, StyledLoginForm } from "./LoginStyles";

export default function Login(){
    
  return(
    <StyledLogin>
      <h1>MyWallet</h1>
      <StyledLoginForm>
        <InputField placeholder="Email"  />
        <InputField placeholder="Senha" />
      </StyledLoginForm>
    </StyledLogin>
  );
}