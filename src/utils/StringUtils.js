/**
 * Returns true if string is not empty or null
 * @param  {String} str
 */ export default class StringUtils {
  static isNotBlank(str) {
    return str !== null && str !== "" && str !== " ";
  }
}
