import { SPINNER_component } from "../js/spinner.js";
import { SINGLE_PHOTO_component } from "./getPhoto.js";

class Section {
  ROOT_element;
  constructor(root) {
    this.ROOT_element = root;
  }
  async render() {
    const section = document.createElement("section");
    section.className = "photo";

    const id = this.getIdUrl();
    SPINNER_component.render(this.ROOT_element);
    const photoInfo = await SINGLE_PHOTO_component.getPhoto(id);
    section.append(photoInfo);
    document.querySelector(this.ROOT_element).append(section);
    SPINNER_component.remove();
  }
  getIdUrl() {
    const url = new URL(location);
    const id = url.searchParams.get("photo");
    return id;
  }
}

const SECTION_component = new Section("main");
export { SECTION_component };
