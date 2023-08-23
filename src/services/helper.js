import {NAMESPACE} from '../data/constants';

const isHuddle = NAMESPACE === 'huddle';

const renderNumber = (
  number, minimumFractionDigits = 0,
  maximumFractionDigits = 2
) => new Intl.NumberFormat(
  'en-US', {
    minimumFractionDigits,
    maximumFractionDigits
  }).format(number);

const groupSpecialisms = specialisms => {
  let data = specialisms.reduce((r, e) => {

    // get first letter of name of current element
    let alphabet = e.name[0];

    // if there is no property in accumulator with this letter create it
    if (!r[alphabet]) r[alphabet] = { alphabet, specialisms: [e] }

    // if there is push current element to children array for that letter
    else r[alphabet].specialisms.push(e);

    // return accumulator
    return r;
  }, {});

  return Object.values(data);
}

export {
  isHuddle,
  renderNumber,
  groupSpecialisms
};
