/* eslint-disable prettier/prettier */
import {REG_EMAIL} from '@src/constant/Constant';

export function formatPrice(num: string) {
  if (
    num === null ||
    num === undefined ||
    num == '0' ||
    Number.isNaN(parseFloat(num))
  )
    return '';
  var result = num.toString().replace(/,/g, '');
  return result
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    .replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|' '|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      '',
    );
}
export const formatPriceDost = (num: string) => {
  if (
    num === null ||
    num === undefined ||
    num == '0' ||
    Number.isNaN(parseFloat(num))
  )
    return '0';
  var result = num?.toString().replace(/,/g, '');
  return new Intl.NumberFormat('de-DE').format(Number(result));
};

export function defineFormatPrice(value) {
  const price = formatPrice(
    value?.slice(
      0,
      value?.indexOf('.') > 0 ? value?.indexOf('.') : value?.length,
    ),
  );
  return price;
}
export const checkDuplicatePrice = (price: string) => {
  let splitPrice = price?.split('-');
  if (!!splitPrice && splitPrice.length == 2) {
    let priceOne = splitPrice[0].trim();
    let priceTwo = splitPrice[1].trim();

    if (priceOne == priceTwo) return priceOne;
    else return price;
  } else return price;
};
export const dateToString = (dateTime: Date) =>
  `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`;

export function validatePhone(phone: string) {
  if (!phone) return false;
  return /(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(phone);
}
export function validateEmail(email: string) {
  if (!email) return false;
  return REG_EMAIL.test(email);
}

export const replaceSpecialCharacter = (inputString: string) => {
  return inputString
    .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a')
    .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e')
    .replace(/ì|í|ị|ỉ|ĩ/g, 'i')
    .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o')
    .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u')
    .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y')
    .replace(/đ/g, 'd')
    .replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A')
    .replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E')
    .replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I')
    .replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O')
    .replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U')
    .replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y')
    .replace(/Đ/g, 'D')
    .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '')
    .replace(/\u02C6|\u0306|\u031B/g, '')
    .replace(/\u02C6|\u0306|\u031B/g, '')
    .trim()
    .replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' ',
    );
};
