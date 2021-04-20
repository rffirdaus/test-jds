// VALIDASI HANYA HURUF
export function hanyahuruf (value = '') {
  let regex = new RegExp(/^[a-zA-Z ]*$/)
  return regex.test(value)
}
// VALIDASI HANYA HURUF tampa spasi
export function hanyahuruftampaspasi (value = '') {
  let regex = new RegExp(/^[a-zA-Z]*$/)
  return regex.test(value)
}
// VALIDASI tampa spasi
export function tampaspasi (value = '') {
  let regex = new RegExp(/^\S*$/)
  return regex.test(value)
}
// VALIDASI HANYA ANGKA
export function hanyaangka (value = '') {
  let regex = new RegExp(/^[0-9]*$/)
  return regex.test(value)
}
// VALIDASI HANYA nop
export function nopkurang18 (value = '') {
  let regex = new RegExp(/^[a-z0-9_-]{18,50}$/)
  return regex.test(value)
}
// VALIDASI HANYA nop
export function noplebih18 (value = '') {
  let regex = new RegExp(/^[a-z0-9_-]{0,18}$/)
  return regex.test(value)
}
// VALIDASI EMAIL TERSEDIA
export function isEmailAvailable (value) {
  if (value === '') return true

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value.length > 10)
    }, 500)
  })
}
// VALIDASI EMAIL
export function hanyaemail (value = '') {
  // eslint-disable-next-line no-useless-escape
  let regex = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  return regex.test(value)
}
