import {AuthStateInterface} from "../auth/types/authStateInterface";
import {AboutStateInterface} from "../auth/types/AboutStateInterface";
import {PortfolioStateInterface} from "../auth/types/PortfolioStateInterface";

export interface AppStateInterface {
  auth: AuthStateInterface,
  about: AboutStateInterface,
  portfolio: PortfolioStateInterface
}
