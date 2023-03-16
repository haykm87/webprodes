
import {BackendErrorsInterface} from "../BackendError.Interface";
import {SliderInterface} from "./SliderInterface";
import {AboutUsInterface} from "./about.interface";
import {Portfolio} from "./portfolio.interface";
import {OurServicesInterface} from "./our-services";
import {OurTeamInterface} from "./our-team";

export interface HomeStateInterface
{
  isSubmitting: boolean | null
  validationError: BackendErrorsInterface | null
  isLoading: boolean | null,
  Slider: SliderInterface[],
  About: AboutUsInterface,
  Portfolio: Portfolio[],
  Services: OurServicesInterface[],
  Team: OurTeamInterface[]
}
