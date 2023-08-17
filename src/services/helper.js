
const getNamespace = process.env.REACT_APP_SITE_NAME;

const renderNumber = (
  number, minimumFractionDigits = 0,
  maximumFractionDigits = 2
) => new Intl.NumberFormat(
  'en-US', {
    minimumFractionDigits,
    maximumFractionDigits
  }).format(number);

const isHuddle = getNamespace === 'huddle';

export {
  getNamespace,
  isHuddle,
  renderNumber,
};
