
export default function addDotsToCurrency(number:number) {
    let str = number.toString();
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }