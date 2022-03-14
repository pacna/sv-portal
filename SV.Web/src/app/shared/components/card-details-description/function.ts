import { CreateCost } from '../../types/customs/create-cost.enum';
import { LiquefyCost } from '../../types/customs/liquefy-cost.enum';
export function enumCostMapperToString<TEnum extends CreateCost | LiquefyCost>(
  e: TEnum,
  key: 'bronze' | 'silver' | 'gold' | 'legendary'
): string {
  return e[key].toString();
}
