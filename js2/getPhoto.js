import { API_component } from "../js/api.js";
class SinglePhoto {
  async getPhoto(id) {
    const photoData = await API_component.getSinglePhotos(id);
    const container = document.createElement("div");
    container.className = "container photo__wrapper";
    const image = await this.loadImg(
      photoData.urls.raw,
      photoData.alt_description
    );

    container.innerHTML = `
   <a class="photo__author" target="_blank" href="${photoData.user.links.self}"
      ><img
        src="${photoData.user.profile_image.small}"
        alt="${photoData.user.bio}"
        title="${photoData.user.name}"
      /><span>${photoData.user.name}</span></a
    >
    <div class="photo__control">
      <button id="${photoData.id}" class="photo__like">${photoData.likes}</button>
      <a
        class="photo__download"
        download="true"
        href="${photoData.links.download}"
        target="_blank"
      ></a>
    </div>
    `;
    container.prepend(image);
    return container;
  }
  loadImg(src, alt) {
    return new Promise((resolve, reject) => {
      const image = document.createElement("img");
      image.src = src;
      image.alt = alt;
      image.style.maxHeight = "80vh";
      image.className = "photo__picture";
      image.addEventListener("load", () => {
        resolve(image);
      });
    });
  }
}

const SINGLE_PHOTO_component = new SinglePhoto();
export { SINGLE_PHOTO_component };
