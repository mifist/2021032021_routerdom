export async function client(url) {
  const response = await fetch(url);
  // await sleep(1000);
  if (response.ok) {
    const results = await response.json();
    if (results) {
      return results;
    } else {
      return Promise.reject(Error("Not found page"));
    }
  } else {
    const error = {message: "uncuccessfull response"};
    return Promise.reject(error);
  }
}

// eslint-disable-next-line no-unused-vars
function sleep(ms = 3000) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
