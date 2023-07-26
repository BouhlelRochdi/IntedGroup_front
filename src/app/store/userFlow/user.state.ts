import { DemandeDto } from "src/app/core/dtos/demande.dto";
import { LoginDto } from "src/app/core/dtos/login.dto";

export interface UserState {
  connectedUser: LoginDto;
  isAuthenticated: boolean;
  demande: DemandeDto;
  demandeId: string;
  alldemandes: DemandeDto[];
}
