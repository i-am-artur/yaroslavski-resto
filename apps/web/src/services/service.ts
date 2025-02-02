export const telegramMessageAPI = `${process.env.basePath}/test.php`;
export const testTelegramMessageAPI = `http://localhost/assortment/test.php`;

export async function telegramMessage(message: string) {
  return fetch(telegramMessageAPI, {
  // return fetch(testTelegramMessageAPI, {
    method: 'POST',
    body: JSON.stringify({ message }),
  })
    .then((res) => res.text())
    .then((res) => console.log(res));
}
