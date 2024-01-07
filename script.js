function getDomain() {
  domains = [
    "de1.api.radio-browser.info",
    "nl1.api.radio-browser.info",
    "at1.api.radio-browser.info",
  ];
  return domains[Math.floor(Math.random() * domains.length)];
}

async function getData() {
  offset = Math.floor(Math.random() * 100);
  url = `http://${getDomain()}/json/stations/search?codec=MP3&tag=news&order=random&limit=1&offset=${offset}`;
  data = await fetch(url)
    .then((res) => res.json())
    .then((data) => data[0])
    .catch((err) => console.log(err));
  return [data.countrycode, data.url_resolved];
}

getData().then((data) => console.log(data[0], data[1]));
