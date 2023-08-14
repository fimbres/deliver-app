let currencyCode = 'USD'; // IDR or USD
const currencyPosition = 'right' // left or right
const maxFractionDigits = 2;
const decimalSeparator = ',';
const thousandSeparator = '.';

function position(currencyPosition: string, value: string) {
  return currencyPosition === 'left' ? `${currencyCode}${value}` : `$${value} ${currencyCode.toUpperCase()}`;
}

const CurrencyFormatter = (value: string | number) => {
  var string = 'string';
  var result;

  if (value === 0 || value === null || value === undefined || value === '0' || typeof value === string) {
    return position(currencyPosition, '0');
  }
  
  currencyCode = currencyCode.replace(/\s/g, '').toLowerCase();
  if (currencyCode === 'idr' || currencyCode === 'rp') {
    value = Math.ceil(value as number);
  }

  const valueSplit = String((value as number).toFixed(maxFractionDigits)).split(`${thousandSeparator}`);
  const firstvalue = valueSplit[0];
  const secondvalue = valueSplit[1];
  const valueReal = String(firstvalue).replace(/\B(?=(\d{3})+(?!\d))/g, `${thousandSeparator}`);

  if (Number(secondvalue) > 0) {
    result = position(currencyPosition, `${valueReal}${thousandSeparator}${secondvalue}`);
  } else {
    result = position(currencyPosition, `${valueReal}`);
  }

  return result;
}

export default CurrencyFormatter;