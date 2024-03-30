class API {
  BASE_URL;
  ACCESS_KEY;
  SECRET_KEY;
  page_number = 1;
  constructor(BASE_URL, ACCESS_KEY, SECRET_KEY) {
    this.BASE_URL = BASE_URL;
    this.ACCESS_KEY = ACCESS_KEY;
    this.SECRET_KEY = SECRET_KEY;
  }
  headers() {
    const head = {
      Authorization: `Client-ID ${this.ACCESS_KEY}`,
    };
    return head;
  }
  getAllPhotos() {
    return fetch(`${this.BASE_URL}?per_page=30&page=${this.page_number}`, {
      method: "GET",
      headers: this.headers(),
    }).then((response) => response.json());
  }
  getSinglePhotos(photoId) {
    this.page_number = 1;
    return fetch(`${this.BASE_URL}/${photoId}`, {
      method: "GET",
      headers: this.headers(),
    }).then((response) => response.json());
  }
  set page_number(number) {
    this.page_number = number;
  }
}

const API_component = new API(
  "https://api.unsplash.com/photos",
  "GqqBFzYQGOPScWyBy2Nd2pRcSQr-rvM5ZtB2OEshgTg",
  "XCC4EgqV5ot8QOf0TJ4uhsKlQ9KZJo430w3M6I-fP64"
);
export { API_component };
