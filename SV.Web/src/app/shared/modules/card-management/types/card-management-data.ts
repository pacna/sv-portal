import { CardDetailResponse } from '../../../types/api/card-detail-response';
import { Craft } from '../../../types/customs/craft.enum';

export interface CardManagementData {
  craft: Craft;
  card: CardDetailResponse;
}
