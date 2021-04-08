import { Moment } from 'moment';
import { IBusinessOffer } from 'app/shared/model/business-offer.model';

export interface IBusinessOpportunity {
  id?: number;
  investmentAmount?: number;
  startDate?: Moment;
  endDate?: Moment;
  planDescription?: string;
  businessOffers?: IBusinessOffer[];
}

export class BusinessOpportunity implements IBusinessOpportunity {
  constructor(
    public id?: number,
    public investmentAmount?: number,
    public startDate?: Moment,
    public endDate?: Moment,
    public planDescription?: string,
    public businessOffers?: IBusinessOffer[]
  ) {}
}
