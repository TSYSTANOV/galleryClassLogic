import { API_component } from "./api.js";
import { SPINNER_component } from "./spinner.js";

class RenderPhotos {
  ROOT_element;
  gridListClass;
  constructor(root) {
    this.ROOT_element = root;
  }
  async render() {
    SPINNER_component.render(this.ROOT_element);
    const section = document.createElement("section");
    section.className = "gallery";
    const container = document.createElement("div");
    container.className = "container gallery__wrapper";
    const gridList = document.createElement("ul");
    gridList.className = "grid";
    this.gridListClass = ".grid";
    const data = await API_component.getAllPhotos();
    const elements = await Promise.all(
      data.map(async (item) => {
        const li = document.createElement("li");

        li.className = "card";
        const image = await this.loadImg(
          item.urls.regular,
          item.alt_description
        );

        li.innerHTML = `
                  <a
                    id="${item.id}"
                    class="grid-item"
                    href="page.html?photo=${item.id}"
                    >
                    <a class="card__author" href="#">
                      <img
                        class="author__photo"
                        src="${item.user.profile_image.small}"
                        width="32"
                        height="32"
                        role="presentation"
                        alt="null"
                        title="${item.user.name}"
                      />
                    </a>
                    <button class="card__photo-like">${item.likes}</button>
                    <a
                      class="card__download"
                      href="${item.links.download}"
                      download=""
                      target="_blank"
                    ></a>
                  </a>`;
        li.querySelector(".grid-item").append(image);
        return li;
      })
    );
    SPINNER_component.remove();
    gridList.append(...elements);
    container.append(gridList);

    section.append(container);
    document.querySelector(this.ROOT_element).append(section);
    const endElement = document.createElement("div");
    gridList.after(endElement);
    this.observerFunc(endElement);
    var msnry = new Masonry(gridList, {
      columnWidth: 200,
      gutter: 10,
      itemSelector: ".card",
      isFitWidth: true,
    });
  }
  loadImg(src, alt) {
    return new Promise((resolve, reject) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.style.width = "200px";
      img.addEventListener("load", () => {
        resolve(img);
      });
    });
  }
  async addMorePhotos() {
    SPINNER_component.render(this.gridListClass, "after");
    API_component.page_number += 1;
    const data = await API_component.getAllPhotos();
    const elements = await Promise.all(
      data.map(async (item) => {
        const li = document.createElement("li");

        li.className = "card";
        const image = await this.loadImg(
          item.urls.regular,
          item.alt_description
        );

        li.innerHTML = `
                  <a
                    id="${item.id}"
                    class="grid-item"
                    href="page.html?photo=${item.id}"
                    >
                    <a class="card__author" href="#">
                      <img
                        class="author__photo"
                        src="${item.user.profile_image.small}"
                        width="32"
                        height="32"
                        role="presentation"
                        alt="null"
                        title="${item.user.name}"
                      />
                    </a>
                    <button class="card__photo-like">${item.likes}</button>
                    <a
                      class="card__download"
                      href="${item.links.download}"
                      download=""
                      target="_blank"
                    ></a>
                  </a>`;
        li.querySelector(".grid-item").append(image);
        return li;
      })
    );
    document.querySelector(this.gridListClass).append(...elements);
    SPINNER_component.remove();
    var msnry = new Masonry(document.querySelector(this.gridListClass), {
      columnWidth: 200,
      gutter: 10,
      itemSelector: ".card",
      isFitWidth: true,
    });
  }
  observerFunc(HTMLelement) {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("loadMore");
          this.addMorePhotos();
        }
      },
      { rootMargin: "50px" }
    );
    observer.observe(HTMLelement);
  }
}

const RENDER_PHOTOS_component = new RenderPhotos("main");
export { RENDER_PHOTOS_component };
