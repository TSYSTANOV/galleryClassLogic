class Spinner {
  spinnerClass;
  constructor(root) {
    this.ROOT_element = root;
  }
  render(root, param) {
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    this.spinnerClass = ".spinner";
    spinner.innerHTML = `
    <?xml version="1.0" encoding="utf-8"?>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="
        margin: auto;
        background: none;
        display: block;
        shape-rendering: auto;
      "
      width="284px"
      height="284px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <g transform="rotate(0 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.3927986906710311s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(27.692307692307693 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.3600654664484452s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(55.38461538461539 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.32733224222585927s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(83.07692307692308 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.29459901800327337s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(110.76923076923077 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.2618657937806874s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(138.46153846153845 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.2291325695581015s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(166.15384615384616 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.19639934533551556s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(193.84615384615384 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.16366612111292964s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(221.53846153846155 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.1309328968903437s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(249.23076923076923 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.09819967266775778s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(276.9230769230769 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.06546644844517185s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(304.61538461538464 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="-0.03273322422258593s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <g transform="rotate(332.3076923076923 50 50)">
        <rect
          x="46.5"
          y="2"
          rx="0"
          ry="0"
          width="7"
          height="12"
          fill="#c0f0f0"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="0.4255319148936171s"
            begin="0s"
            repeatCount="indefinite"
          ></animate>
        </rect>
      </g>
      <!-- [ldio] generated by https://loading.io/ -->
    </svg>`;
    if (param === "after") {
      document.querySelector(root).after(spinner);
    } else {
      document.querySelector(root).append(spinner);
    }
  }
  remove() {
    document.querySelector(this.spinnerClass).remove();
  }
}
const SPINNER_component = new Spinner();
export { SPINNER_component };
