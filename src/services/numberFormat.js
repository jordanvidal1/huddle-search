export const renderNumber = (number, minimumFractionDigits = 0, maximumFractionDigits = 2) => new Intl.NumberFormat('en-US', {minimumFractionDigits, maximumFractionDigits}).format(number);
