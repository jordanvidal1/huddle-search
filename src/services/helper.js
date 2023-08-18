import {NAMESPACE} from '../data/constants';

const renderNumber = (
  number, minimumFractionDigits = 0,
  maximumFractionDigits = 2
) => new Intl.NumberFormat(
  'en-US', {
    minimumFractionDigits,
    maximumFractionDigits
  }).format(number);

const isHuddle = NAMESPACE === 'huddle';

export {
  isHuddle,
  renderNumber,
};
