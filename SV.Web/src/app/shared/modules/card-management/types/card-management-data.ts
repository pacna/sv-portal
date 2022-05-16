// Shared
import { CardDetailResponse } from '@svportal/shared/types/api/card-detail-response';
import { Craft } from '@svportal/shared/types/customs/craft.enum';

export interface CardManagementData {
  craft: Craft;
  card: CardDetailResponse;
}
