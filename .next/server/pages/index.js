"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "G:\\Tudo Thyago\\Coisas pessoais\\Cursos e Programa\xE7\xE3o em Geral\\projetos\\portfolio\\pages\\index.js";



let notMobile = true;
let currentProject = 0;
let maxProjects;
let mouseenter = false;
let project;
let lastContainer = 0;

function Home() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    project = document.querySelectorAll(".c-project");
    maxProjects = Number(document.querySelectorAll(".c-project").length - 1);

    for (let i of project) {
      i.addEventListener("mouseenter", () => {
        mouseEnter();
      });
      i.addEventListener("mouseout", () => {
        mouseOut();
      });
    }

    setInterval(() => {
      if (!mouseenter) {
        if (window.innerWidth < 768) {
          if (currentProject >= maxProjects) {
            currentProject = 0;
            document.querySelector("#js-box").scrollBy(-245 * maxProjects, 0);
          } else {
            document.querySelector("#js-box").scrollBy(245, 0);
            currentProject++;
          }

          notMobile = false;
        } else if (!notMobile) {
          document.querySelector("#js-box").scrollBy(-900, 0);
          notMobile = true;
        }
      }
    }, 4000);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        charset: "UTF-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Montserrat&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "icon",
        href: "/images/Logo.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Thyago Araujo Portf\xF3lio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("body", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "c-container-geral",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "c-container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
            className: "c-computer-image",
            src: "./images/computador.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-container-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-logo",
              src: "./images/Logo.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-introduction",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                children: ["Ol\xE1, eu sou ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                  className: "c-name",
                  children: "Thyago Araujo,"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 31
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h1", {
                className: "c-title",
                children: "DESENVOLVEDOR FRONT-END"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "A procura de uma oportunidade na \xE1rea de desenvolvimento - HTML, CSS, Javascript e React."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                className: "c-projects-button",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "#projetos",
                  children: "PROJETOS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-skills-container",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-skills",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                  children: "Habilidades:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "js",
                    viewBox: "0 0 128 128",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#F0DB4F",
                      d: "M1.408 1.408h125.184v125.185H1.408z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#323330",
                      d: "M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "node",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#83CD29",
                      d: "M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "jquery",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#0868AC",
                      d: "M9.625 32.181C-1.404 48.032-.031 68.657 8.394 85.501c.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52a75.27 75.27 0 001.586 1.812l.033.033.061.068a80.44 80.44 0 001.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184a66.92 66.92 0 002.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185a72.498 72.498 0 01-2.352-.765l-.323-.117a72.245 72.245 0 01-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198a92.857 92.857 0 01-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51a58.591 58.591 0 01-1.751-.982l-.591-.33a81.221 81.221 0 01-2.28-1.397l-.615-.41a59.283 59.283 0 01-1.623-1.079l-.522-.367a89.287 89.287 0 01-1.534-1.109l-.679-.514a64.473 64.473 0 01-1.384-1.082l-.617-.495a82.693 82.693 0 01-1.724-1.453l-.189-.159a83.466 83.466 0 01-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509a70.541 70.541 0 01-1.598-1.69l-.079-.084a67.39 67.39 0 01-1.621-1.844l-.424-.504a70.602 70.602 0 01-1.167-1.442l-.427-.532a78.406 78.406 0 01-1.347-1.794c-12.15-16.574-16.516-39.432-6.805-58.204m25.629-2.434c-7.977 11.478-7.543 26.844-1.321 38.983a50.581 50.581 0 003.528 5.889c1.195 1.713 2.52 3.751 4.106 5.127a48.111 48.111 0 001.79 1.858l.472.465a51.69 51.69 0 001.828 1.698l.074.064.018.018a55.268 55.268 0 002.135 1.767l.485.378a54.08 54.08 0 002.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635a50.376 50.376 0 01-2.333-.674l-.701-.227a45.423 45.423 0 01-1.631-.562l-.736-.274a56.418 56.418 0 01-1.756-.708l-.473-.2a47.728 47.728 0 01-2.148-.999c-.363-.177-.72-.364-1.078-.548l-.622-.32a44.502 44.502 0 01-1.363-.77l-.326-.185a47.844 47.844 0 01-1.651-1.008l-.498-.332a61.759 61.759 0 01-1.069-.707 57.456 57.456 0 01-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84m22.278-.775c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832a33.242 33.242 0 01-3.201-1.329 33.215 33.215 0 01-5.612-3.424c-9.969-7.565-16.162-21.994-9.657-33.745"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "firebase",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                      fill: "#f58220",
                      d: "M27.35 80.52l10.68-68.44c.37-2.33 3.5-2.89 4.6-.8l11.48 21.48-26.76 47.76zm75.94 16.63L93.1 34.11c-.31-1.96-2.76-2.76-4.17-1.35L24.71 97.15l35.54 19.95a7.447 7.447 0 007.18 0l35.86-19.95zm-28.85-55L66.21 26.5c-.92-1.78-3.44-1.78-4.36 0L25.7 90.95l48.74-48.8z"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
                      fill: "#11479e",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("circle", {
                        cx: "64",
                        cy: "64",
                        r: "11.4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("svg", {
                    className: "react",
                    viewBox: "0 0 128 128",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("g", {
                      fill: "#61DAFB",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("circle", {
                        cx: "64",
                        cy: "64",
                        r: "11.4"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("path", {
                        d: "M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 118,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          id: "projetos",
          className: "c-projects",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
            children: "PROJETOS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-next-prev-projects",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects1,
              className: "c-projects-1 c-group-button-projects active"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              onClick: nextPrevProjects2,
              className: "c-projects-2 c-group-button-projects"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-box",
            id: "js-box",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/letmeask.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Letmeask"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Letmeask \xE9 uma aplica\xE7\xE3o para tirar d\xFAvidas em que o usu\xE1rio precisa logar com o google para mandar as suas d\xFAvidas e o administrador em uma aula online ou stream responde, podendo marcar as respostas sendo responsidas no momento, marcar como respondida ou apagar. Utilizando react, typescript e firebase."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 149,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://letmeask-2c222.web.app",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/letmeask",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 165,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/move-it.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Move it"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 178,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "O move.it \xE9 um app que une a t\xE9cnica de Pomodoro com a realiza\xE7\xE3o de exerc\xEDcios f\xEDsicos para quem passa muito tempo na frente do computador. Contando com um sistema de armazenamento local para caso o usu\xE1rio n\xE3o queria logar, e um armazenamento na nuvem com firebase, utilizando a autentica\xE7\xE3o com o google. Criado com React, Firebase, TypeScript, Material-UI."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://move-it-three-omega.vercel.app",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/move-it",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 200,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/Next-Level-Week-Heat.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 208,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Next Level Week Heat"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Uma aplica\xE7\xE3o de login e autentica\xE7\xE3o com github para o envio e recebimento de mensagem em tempo real. Utilizando React, Typescript, Sass, Axios e Socket IO para o Front-End, Prisma, Express e JWT no Back-End, React Native, Expo e Moti no mobile."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Next-Level-Week-Heat",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 224,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 207,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/e-diarista.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "E-diaristas"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 245,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "E-diaristas \xE9 um projeto simples com react e react native com uma p\xE1gina que consume uma api e depois renderiza na tela os dados recebidos. O uso da aplica\xE7\xE3o \xE9 para procurar diaristas dispon\xEDveis na regi\xE3o."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/E-diaristas",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 257,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 254,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 253,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project bg-2",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/devfinance.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Dev$finance"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Dev$finance \xE9 um projeto feito durante uma maratona da Rocketseat, utilizando Html, Css e Javascript e sua fun\xE7\xE3o \xE9 ajudar na organiza\xE7\xE3o de gastos mensais, tudo utilizando LocalStorage para n\xE3o perder os dados."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 271,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 269,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://thyagoaraujom.github.io/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 282,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 279,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Dev-finance",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      target: "_blank",
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 289,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 286,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 268,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-project ",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "c-project-img",
                src: "./images/projects/quiz.gif",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "c-project_content",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                    children: "Quiz"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 304,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                    children: "Um aplica\xE7\xE3o onde o usu\xE1rio decide quantas perguntas deseja responder, de temas e dificuldades aleat\xF3rias, ap\xF3s responder o usu\xE1rio pode ver o resultado e decidir de salvar o question\xE1rio para se quiser rever o resultado outra hora. Utilizando React, TypeScript, Formik, Axios e Material-UI para a constru\xE7\xE3o da aplica\xE7\xE3o."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 305,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 303,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "c-buttons",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://quiz-ty.vercel.app",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-site",
                      children: "SITE"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    target: "_blank",
                    href: "https://github.com/ThyagoAraujoM/Quiz",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                      className: "btn-git",
                      children: "GITHUB"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 321,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 318,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 314,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
          className: "c-about-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "c-about",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-details-1",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 330,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "c-about-content",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h2", {
                children: "SOBRE MIM"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: "Sou um programador em busca de uma oportunidade para entrar no mercado. J\xE1 tenho experi\xEAncia na cria\xE7\xE3o de sites responsivos e estou sempre buscando aprender novas ferramentas para melhorar o meu trabalho, com 40+ horas em cursos e 100+ horas em pr\xE1tica. Atualmente estou focando meus estudos em cria\xE7\xE3o de aplica\xE7\xF5es com React, Typescript e Node."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["Voc\xEA pode encontrar mais sobre meus projetos e minha rotina de estudos em minha conta no \xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  target: "_blank",
                  href: "https://github.com/ThyagoAraujoM",
                  children: "Github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 19
                }, this), "."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 341,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "./assets/CV.pdf",
                download: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("button", {
                  children: "CURR\xCDCULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 350,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 349,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                className: "c-email",
                children: ["thyagoaraujomotta@gmail.com", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  onClick: copyText,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/copy-icon.svg"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 356,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    className: "c-copy",
                    children: "e-mail copiado"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 357,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 355,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 353,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                children: ["(27) 9 9975-5684", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                  href: "https://api.whatsapp.com/send?phone=5527999755684",
                  target: "_blank",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                    src: "./images/whats-icon.svg",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 365,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 362,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 360,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
              className: "c-details-2",
              src: "./images/details.svg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 329,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

function copyText() {
  let text = "thyagoaraujomotta@gmail.com";
  navigator.clipboard.writeText(text);
  document.querySelector(".c-copy").style.display = "inline-block";
  setTimeout(() => {
    document.querySelector(".c-copy").style.display = "none";
  }, 1000);
}

function mouseEnter() {
  mouseenter = true;
}

function mouseOut() {
  mouseenter = false;
}

function nextPrevProjects1() {
  nextPrevProjects(1);
}

function nextPrevProjects2() {
  nextPrevProjects(2);
}

function nextPrevProjects(project) {
  document.querySelectorAll(".c-group-button-projects").forEach(i => {
    i.classList.remove("active");
  });
  document.querySelectorAll(".c-group-projects").forEach(i => {
    i.classList.remove("active");
  });

  if (lastContainer < project) {
    document.querySelector("#js-box").scrollBy(900 * (project - lastContainer), 0);
  } else {
    document.querySelector("#js-box").scrollBy(900 * (project - lastContainer), 0);
  }

  lastContainer = project;

  if (project == 1) {
    document.querySelector(".c-projects-1").classList.add("active");
  } else if (project == 2) {
    document.querySelector(".c-projects-2").classList.add("active");
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkI7QUFDM0JHLElBQUFBLFFBQVEsQ0FDTFcsYUFESCxDQUNpQixTQURqQixFQUVHQyxRQUZILENBRVksT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZaLEVBRTZDLENBRjdDO0FBR0QsR0FKRCxNQUlPO0FBQ0xFLElBQUFBLFFBQVEsQ0FDTFcsYUFESCxDQUNpQixTQURqQixFQUVHQyxRQUZILENBRVksT0FBT2YsT0FBTyxHQUFHQyxhQUFqQixDQUZaLEVBRTZDLENBRjdDO0FBR0Q7O0FBQ0RBLEVBQUFBLGFBQWEsR0FBR0QsT0FBaEI7O0FBRUEsTUFBSUEsT0FBTyxJQUFJLENBQWYsRUFBa0I7QUFDaEJHLElBQUFBLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixlQUF2QixFQUF3Q2MsU0FBeEMsQ0FBa0RFLEdBQWxELENBQXNELFFBQXREO0FBQ0QsR0FGRCxNQUVPLElBQUk5QixPQUFPLElBQUksQ0FBZixFQUFrQjtBQUN2QkcsSUFBQUEsUUFBUSxDQUFDVyxhQUFULENBQXVCLGVBQXZCLEVBQXdDYyxTQUF4QyxDQUFrREUsR0FBbEQsQ0FBc0QsUUFBdEQ7QUFDRDtBQUNGOztBQUVELGlFQUFlNUIsSUFBZjs7Ozs7Ozs7OztBQzVhQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmxldCBub3RNb2JpbGUgPSB0cnVlO1xyXG5sZXQgY3VycmVudFByb2plY3QgPSAwO1xyXG5sZXQgbWF4UHJvamVjdHM7XHJcbmxldCBtb3VzZWVudGVyID0gZmFsc2U7XHJcbmxldCBwcm9qZWN0O1xyXG5sZXQgbGFzdENvbnRhaW5lciA9IDA7XHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmMtcHJvamVjdFwiKTtcclxuICAgIG1heFByb2plY3RzID0gTnVtYmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1wcm9qZWN0XCIpLmxlbmd0aCAtIDEpO1xyXG4gICAgZm9yIChsZXQgaSBvZiBwcm9qZWN0KSB7XHJcbiAgICAgIGkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIG1vdXNlRW50ZXIoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgbW91c2VPdXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBpZiAoIW1vdXNlZW50ZXIpIHtcclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcclxuICAgICAgICAgIGlmIChjdXJyZW50UHJvamVjdCA+PSBtYXhQcm9qZWN0cykge1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IDA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYm94XCIpLnNjcm9sbEJ5KC0yNDUgKiBtYXhQcm9qZWN0cywgMCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKS5zY3JvbGxCeSgyNDUsIDApO1xyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCsrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbm90TW9iaWxlID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmICghbm90TW9iaWxlKSB7XHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2pzLWJveFwiKS5zY3JvbGxCeSgtOTAwLCAwKTtcclxuICAgICAgICAgIG5vdE1vYmlsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCA0MDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PSdVVEYtOCcgLz5cclxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PSdYLVVBLUNvbXBhdGlibGUnIGNvbnRlbnQ9J0lFPWVkZ2UnIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPSdwcmVjb25uZWN0JyBocmVmPSdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tJyAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD0ncHJlY29ubmVjdCcgaHJlZj0naHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbScgY3Jvc3NvcmlnaW4gLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj0naHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXI6d2dodEA0MDA7NzAwJmZhbWlseT1Nb250c2VycmF0JmRpc3BsYXk9c3dhcCdcclxuICAgICAgICAgIHJlbD0nc3R5bGVzaGVldCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2ltYWdlcy9Mb2dvLnN2ZycgLz5cclxuICAgICAgICA8dGl0bGU+VGh5YWdvIEFyYXVqbyBQb3J0ZsOzbGlvPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1jb250YWluZXItZ2VyYWwnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1jb21wdXRlci1pbWFnZSdcclxuICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL2NvbXB1dGFkb3Iuc3ZnJ1xyXG4gICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1jb250YWluZXItY29udGVudCc+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2MtbG9nbycgc3JjPScuL2ltYWdlcy9Mb2dvLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtaW50cm9kdWN0aW9uJz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICBPbMOhLCBldSBzb3UgPHNwYW4gY2xhc3NOYW1lPSdjLW5hbWUnPlRoeWFnbyBBcmF1am8sPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nYy10aXRsZSc+REVTRU5WT0xWRURPUiBGUk9OVC1FTkQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIEEgcHJvY3VyYSBkZSB1bWEgb3BvcnR1bmlkYWRlIG5hIMOhcmVhIGRlIGRlc2Vudm9sdmltZW50byAtXHJcbiAgICAgICAgICAgICAgICAgIEhUTUwsIENTUywgSmF2YXNjcmlwdCBlIFJlYWN0LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2MtcHJvamVjdHMtYnV0dG9uJz5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nI3Byb2pldG9zJz5QUk9KRVRPUzwvYT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXNraWxscy1jb250YWluZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Mtc2tpbGxzJz5cclxuICAgICAgICAgICAgICAgICAgPGgyPkhhYmlsaWRhZGVzOjwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J2pzJyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjRjBEQjRGJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPSdNMS40MDggMS40MDhoMTI1LjE4NHYxMjUuMTg1SDEuNDA4eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0nIzMyMzMzMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD0nTTExNi4zNDcgOTYuNzM2Yy0uOTE3LTUuNzExLTQuNjQxLTEwLjUwOC0xNS42NzItMTQuOTgxLTMuODMyLTEuNzYxLTguMTA0LTMuMDIyLTkuMzc3LTUuOTI2LS40NTItMS42OS0uNTEyLTIuNjQyLS4yMjYtMy42NjUuODIxLTMuMzIgNC43ODQtNC4zNTUgNy45MjUtMy40MDMgMi4wMjMuNjc4IDMuOTM4IDIuMjM3IDUuMDkzIDQuNzI0IDUuNDAyLTMuNDk4IDUuMzkxLTMuNDc1IDkuMTYzLTUuODc5LTEuMzgxLTIuMTQxLTIuMTE4LTMuMTI5LTMuMDIyLTQuMDQ1LTMuMjQ5LTMuNjI5LTcuNjc2LTUuNDk4LTE0Ljc1Ni01LjM1NWwtMy42ODguNDc3Yy0zLjUzNC44OTMtNi45MDIgMi43NDgtOC44NzcgNS4yMzUtNS45MjYgNi43MjQtNC4yMzYgMTguNDkyIDIuOTc1IDIzLjMzNSA3LjEwNCA1LjMzMiAxNy41NCA2LjU0NSAxOC44NzMgMTEuNTMxIDEuMjk3IDYuMTA0LTQuNDg2IDguMDgtMTAuMjM0IDcuMzc4LTQuMjM2LS44ODEtNi41OTItMy4wMzQtOS4xMzktNi45NDktNC42ODggMi43MTMtNC42ODggMi43MTMtOS41MDggNS40ODUgMS4xNDMgMi40OTkgMi4zNDQgMy42MyA0LjI2IDUuNzk1IDkuMDY4IDkuMTk4IDMxLjc2IDguNzQ2IDM1LjgzLTUuMTc2LjE2NS0uNDc4IDEuMjYxLTMuNjY2LjM4LTguNTgxek02OS40NjIgNTguOTQzSDU3Ljc1M2wtLjA0OCAzMC4yNzJjMCA2LjQzOC4zMzMgMTIuMzQtLjcxNCAxNC4xNDktMS43MTMgMy41NTgtNi4xNTIgMy4xMTctOC4xNzUgMi40MjctMi4wNTktMS4wMTItMy4xMDYtMi40NTEtNC4zMTktNC40ODUtLjMzMy0uNTg0LS41ODMtMS4wMzYtLjY2Ny0xLjA3MWwtOS41MiA1LjgzYzEuNTgzIDMuMjQ5IDMuOTE1IDYuMDY5IDYuOTAyIDcuOTAxIDQuNDYyIDIuNjc4IDEwLjQ1OSAzLjQ5OSAxNi43MzEgMi4wNTkgNC4wODItMS4xODkgNy42MDQtMy42NTIgOS40NDgtNy40MDEgMi42NjYtNC45MTUgMi4wOTQtMTAuODY0IDIuMDctMTcuNDQ0LjA2LTEwLjczNS4wMDEtMjEuNDY4LjAwMS0zMi4yMzd6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9J25vZGUnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyM4M0NEMjknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00xMTIuNzcxIDMwLjMzNEw2OC42NzQgNC43MjljLTIuNzgxLTEuNTg0LTYuNDAyLTEuNTg0LTkuMjA1IDBMMTQuOTAxIDMwLjMzNEMxMi4wMzEgMzEuOTg1IDEwIDM1LjA4OCAxMCAzOC40MDd2NTEuMTQyYzAgMy4zMTkgMi4wODQgNi40MjMgNC45NTQgOC4wODNsMTEuNzc1IDYuNjg4YzUuNjI4IDIuNzcyIDcuNjE3IDIuNzcyIDEwLjE3OCAyLjc3MiA4LjMzMyAwIDEzLjA5My01LjAzOSAxMy4wOTMtMTMuODI4di01MC40OWMwLS43MTMtLjM3MS0xLjc3NC0xLjA3MS0xLjc3NGgtNS42MjNDNDIuNTk0IDQxIDQxIDQyLjA2MSA0MSA0Mi43NzN2NTAuNDljMCAzLjg5Ni0zLjUyNCA3Ljc3My0xMC4xMSA0LjQ4TDE4LjcyMyA5MC43M2MtLjQyNC0uMjMtLjcyMy0uNjkzLS43MjMtMS4xODFWMzguNDA3YzAtLjQ4Mi41NTUtLjk2Ni45ODItMS4yMTNsNDQuNDI0LTI1LjU2MWMuNDE1LS4yMzUgMS4wMjUtLjIzNSAxLjQzOSAwbDQzLjg4MiAyNS41NTVjLjQyLjI1My4yNzIuNzIyLjI3MiAxLjIxOXY1MS4xNDJjMCAuNDg4LjE4My45NjMtLjIzMiAxLjE5OGwtNDQuMDg2IDI1LjU3NmMtLjM3OC4yMjctLjg0Ny4yMjctMS4yNjEgMGwtMTEuMzA3LTYuNzQ5Yy0uMzQxLS4xOTgtLjc0Ni0uMjY5LTEuMDczLS4wODYtMy4xNDYgMS43ODMtMy43MjYgMi4wMi02LjY3NyAzLjA0My0uNzI2LjI1My0xLjc5Ny42OTIuNDEgMS45MjlsMTQuNzk4IDguNzU0YTkuMjk0IDkuMjk0IDAgMDA0LjY0NyAxLjI0NmMxLjY0MiAwIDMuMjUtLjQyNiA0LjY2Ny0xLjI0Nmw0My44ODUtMjUuNTgyYzIuODctMS42NzIgNC4yMy00Ljc2NCA0LjIzLTguMDgzVjM4LjQwN2MwLTMuMzE5LTEuMzYtNi40MTQtNC4yMjktOC4wNzN6TTc3LjkxIDgxLjQ0NWMtMTEuNzI2IDAtMTQuMzA5LTMuMjM1LTE1LjE3LTkuMDY2LS4xLS42MjgtLjYzMy0xLjM3OS0xLjI3Mi0xLjM3OWgtNS43MzFjLS43MDkgMC0xLjI3OS44Ni0xLjI3OSAxLjU2NiAwIDcuNDY2IDQuMDU5IDE2LjUxMiAyMy40NTMgMTYuNTEyIDE0LjAzOSAwIDIyLjA4OC01LjQ1NSAyMi4wODgtMTUuMTA5IDAtOS41NzItNi40NjctMTIuMDg0LTIwLjA4Mi0xMy44ODYtMTMuNzYyLTEuODE5LTE1LjE2LTIuNzM4LTE1LjE2LTUuOTYyIDAtMi42NTggMS4xODQtNi4yMDMgMTEuMzc0LTYuMjAzIDkuMTA1IDAgMTIuNDYxIDEuOTU0IDEzLjg0MiA4LjA5MS4xMTguNTc3LjY0NS45OTEgMS4yNC45OTFoNS43NTRjLjM1NCAwIC42OTItLjE0My45NC0uMzk2LjI0LS4yNzIuMzY3LS42MTMuMzM1LS45NzktLjg5MS0xMC41NjgtNy45MTItMTUuNDkzLTIyLjExMi0xNS40OTMtMTIuNjMxIDAtMjAuMTY2IDUuMzM0LTIwLjE2NiAxNC4yNzUgMCA5LjY5OCA3LjQ5NyAxMi4zNzggMTkuNjIyIDEzLjU3NyAxNC41MDUgMS40MjIgMTUuNjMzIDMuNTQyIDE1LjYzMyA2LjM5NSAwIDQuOTU1LTMuOTc4IDcuMDY2LTEzLjMwOSA3LjA2NnonPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nanF1ZXJ5JyB2aWV3Qm94PScwIDAgMTI4IDEyOCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPScjMDg2OEFDJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkPSdNOS42MjUgMzIuMTgxQy0xLjQwNCA0OC4wMzItLjAzMSA2OC42NTcgOC4zOTQgODUuNTAxYy4yLjQwNC40MS44MDEuNjE3IDEuMTk4bC4zOTQuNzU5LjI0Ni40MzcuNDM5Ljc4NmMuMjYyLjQ2MS41My45Mi44MDQgMS4zNzlsLjQ1OS43NTZjLjMwNC40OTEuNjE1Ljk3Ni45MzMgMS40NmwuMzk4LjYxNGMuNDM5LjY1NS44ODggMS4zMDkgMS4zNTIgMS45NTFsLjAzOS4wNS4yMjguMzA4Yy40MDEuNTUzLjgxNCAxLjA5OSAxLjIzMiAxLjYzOWwuNDY0LjU5Yy4zNzMuNDY5Ljc1Mi45MzUgMS4xMzggMS4zOTlsLjQzNS41MmE3NS4yNyA3NS4yNyAwIDAwMS41ODYgMS44MTJsLjAzMy4wMzMuMDYxLjA2OGE4MC40NCA4MC40NCAwIDAwMS42MTIgMS42OTlsLjUxNy41MjFjLjQyMy40MjYuODUzLjg0NSAxLjI4NyAxLjI2MmwuNTI3LjVjLjU4LjU0NyAxLjE2NiAxLjA4MyAxLjc2NCAxLjYwN2wuMDI4LjAyMi4zMDcuMjYyYy41MjcuNDU2IDEuMDYzLjkwOSAxLjYwMyAxLjM1M2wuNjY0LjUyOWMuNDQxLjM1NC44ODcuNzAyIDEuMzM2IDEuMDQ0bC43MTQuNTQzYy40OTYuMzY1Ljk5NS43MjQgMS40OTkgMS4wNzVsLjU0Ni4zODcuMTUuMTA3Yy40NzguMzI5Ljk2Ny42NDYgMS40NTYuOTYzbC42My40MmMuNzUuNDc0IDEuNTEuOTQzIDIuMjc5IDEuMzk2bC42My4zNTVjLjU2NS4zMjYgMS4xMzQuNjQ2IDEuNzEuOTU5LjMxMi4xNjguNjMyLjMyNy45NDYuNDg4LjQwNy4yMTMuODExLjQyOSAxLjIyNS42MzZsLjI4My4xMzcuNTAxLjI0MmMuNjQxLjMwNiAxLjI4Ny42MDcgMS45NC44OTdsLjQxLjE4NGE2Ni45MiA2Ni45MiAwIDAwMi4yNjMuOTQxbC41NTEuMjE3Yy43MDQuMjcxIDEuNDE4LjUzOSAyLjEzNS43OTFsLjI2OC4wOTNjLjc4Ny4yNzUgMS41ODEuNTMgMi4zODEuNzc5bC41NzUuMTcyYy44MTQuMjQ1IDEuNjE5LjUzOCAyLjQ1OC42OTMgNTMuMzM5IDkuNzI3IDY4LjgzMy0zMi4wNTMgNjguODMzLTMyLjA1My0xMy4wMTMgMTYuOTUzLTM2LjExMSAyMS40MjUtNTcuOTk2IDE2LjQ0Ni0uODI5LS4xODctMS42MzMtLjQ0Ni0yLjQ0Mi0uNjg1bC0uNjA5LS4xODVhNzIuNDk4IDcyLjQ5OCAwIDAxLTIuMzUyLS43NjVsLS4zMjMtLjExN2E3Mi4yNDUgNzIuMjQ1IDAgMDEtMi4wNzQtLjc2OWwtLjU4Mi0uMjI5Yy0uNzUyLS4yOTctMS41LS42MDctMi4yMzktLjkzMWwtLjQ0Ny0uMTk4YTkyLjg1NyA5Mi44NTcgMCAwMS0xLjg4OS0uODc5bC0uNTQ2LS4yNjJjLS40OTEtLjIzOS0uOTc3LS40OTMtMS40NjEtLjc0My0uMzI0LS4xNzEtLjY1NC0uMzMyLS45NzUtLjUxYTU4LjU5MSA1OC41OTEgMCAwMS0xLjc1MS0uOTgybC0uNTkxLS4zM2E4MS4yMjEgODEuMjIxIDAgMDEtMi4yOC0xLjM5N2wtLjYxNS0uNDFhNTkuMjgzIDU5LjI4MyAwIDAxLTEuNjIzLTEuMDc5bC0uNTIyLS4zNjdhODkuMjg3IDg5LjI4NyAwIDAxLTEuNTM0LTEuMTA5bC0uNjc5LS41MTRhNjQuNDczIDY0LjQ3MyAwIDAxLTEuMzg0LTEuMDgybC0uNjE3LS40OTVhODIuNjkzIDgyLjY5MyAwIDAxLTEuNzI0LTEuNDUzbC0uMTg5LS4xNTlhODMuNDY2IDgzLjQ2NiAwIDAxLTEuODEyLTEuNjQ3bC0uNTExLS40OTFjLS40NDEtLjQyLS44NzUtLjg0My0xLjMwMi0xLjI3N2wtLjUxLS41MDlhNzAuNTQxIDcwLjU0MSAwIDAxLTEuNTk4LTEuNjlsLS4wNzktLjA4NGE2Ny4zOSA2Ny4zOSAwIDAxLTEuNjIxLTEuODQ0bC0uNDI0LS41MDRhNzAuNjAyIDcwLjYwMiAwIDAxLTEuMTY3LTEuNDQybC0uNDI3LS41MzJhNzguNDA2IDc4LjQwNiAwIDAxLTEuMzQ3LTEuNzk0Yy0xMi4xNS0xNi41NzQtMTYuNTE2LTM5LjQzMi02LjgwNS01OC4yMDRtMjUuNjI5LTIuNDM0Yy03Ljk3NyAxMS40NzgtNy41NDMgMjYuODQ0LTEuMzIxIDM4Ljk4M2E1MC41ODEgNTAuNTgxIDAgMDAzLjUyOCA1Ljg4OWMxLjE5NSAxLjcxMyAyLjUyIDMuNzUxIDQuMTA2IDUuMTI3YTQ4LjExMSA0OC4xMTEgMCAwMDEuNzkgMS44NThsLjQ3Mi40NjVhNTEuNjkgNTEuNjkgMCAwMDEuODI4IDEuNjk4bC4wNzQuMDY0LjAxOC4wMThhNTUuMjY4IDU1LjI2OCAwIDAwMi4xMzUgMS43NjdsLjQ4NS4zNzhhNTQuMDggNTQuMDggMCAwMDIuMjMzIDEuNjMxbC4wNjUuMDQ5Yy4zMzYuMjMyLjY3OC40NDggMS4wMTkuNjcybC40ODMuMzE5Yy41NDQuMzQ5IDEuMDk1LjY4OSAxLjY1NSAxLjAxNWwuMjM1LjEzNmMuNDgzLjI3OC45NzIuNTUyIDEuNDYzLjgxOGwuNTIxLjI3MWMuMzM5LjE3Ny42NzguMzU4IDEuMDIzLjUzbC4xNTUuMDdjLjcwMy4zNDYgMS40MTIuNjggMi4xMzYuOTk1bC40NzIuMTk0Yy41NzkuMjQ2IDEuMTY0LjQ4NiAxLjc1LjcxbC43NS4yNzVjLjUzMy4xOTggMS4wNjguMzc4IDEuNjA3LjU1OWwuNzI3LjIzM2MuNzY3LjIzOCAxLjUyNS41MzkgMi4zMjQuNjcyIDQxLjE4MyA2LjgyMyA1MC42OTEtMjQuODg2IDUwLjY5MS0yNC44ODYtOC41NyAxMi4zNDMtMjUuMTY4IDE4LjIzMy00Mi44NzkgMTMuNjM1YTUwLjM3NiA1MC4zNzYgMCAwMS0yLjMzMy0uNjc0bC0uNzAxLS4yMjdhNDUuNDIzIDQ1LjQyMyAwIDAxLTEuNjMxLS41NjJsLS43MzYtLjI3NGE1Ni40MTggNTYuNDE4IDAgMDEtMS43NTYtLjcwOGwtLjQ3My0uMmE0Ny43MjggNDcuNzI4IDAgMDEtMi4xNDgtLjk5OWMtLjM2My0uMTc3LS43Mi0uMzY0LTEuMDc4LS41NDhsLS42MjItLjMyYTQ0LjUwMiA0NC41MDIgMCAwMS0xLjM2My0uNzdsLS4zMjYtLjE4NWE0Ny44NDQgNDcuODQ0IDAgMDEtMS42NTEtMS4wMDhsLS40OTgtLjMzMmE2MS43NTkgNjEuNzU5IDAgMDEtMS4wNjktLjcwNyA1Ny40NTYgNTcuNDU2IDAgMDEtMi4yMjYtMS42MjhsLS41MDEtLjM5NWMtNy43NTItNi4xMi0xMy44OTgtMTQuNDg2LTE2LjgxOS0yMy45NzEtMy4wNjItOS44MzYtMi40MDItMjAuODc4IDIuOTAzLTI5Ljg0bTIyLjI3OC0uNzc1Yy00LjcwMiA2LjkyLTUuMTY0IDE1LjUxNC0xLjkwMSAyMy4xNTYgMy40NDEgOC4xMTMgMTAuNDkxIDE0LjQ3NiAxOC43MiAxNy40OTUuMzM5LjEyNS42NzkuMjM3IDEuMDIyLjM1NGwuNDUxLjE0M2MuNDg1LjE1Mi45NjYuMzI5IDEuNDY3LjQyNCAyMi43NCA0LjM5NCAyOC45MDgtMTEuNjY5IDMwLjU0OS0xNC4wMzQtNS40MDIgNy43NzktMTQuNDgyIDkuNjQ2LTI1LjYyMyA2Ljk0Mi0uODgtLjIxMy0xLjg0Ny0uNTMxLTIuNjk1LS44MzJhMzMuMjQyIDMzLjI0MiAwIDAxLTMuMjAxLTEuMzI5IDMzLjIxNSAzMy4yMTUgMCAwMS01LjYxMi0zLjQyNGMtOS45NjktNy41NjUtMTYuMTYyLTIxLjk5NC05LjY1Ny0zMy43NDUnPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT0nZmlyZWJhc2UnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9JyNmNTgyMjAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQ9J00yNy4zNSA4MC41MmwxMC42OC02OC40NGMuMzctMi4zMyAzLjUtMi44OSA0LjYtLjhsMTEuNDggMjEuNDgtMjYuNzYgNDcuNzZ6bTc1Ljk0IDE2LjYzTDkzLjEgMzQuMTFjLS4zMS0xLjk2LTIuNzYtMi43Ni00LjE3LTEuMzVMMjQuNzEgOTcuMTVsMzUuNTQgMTkuOTVhNy40NDcgNy40NDcgMCAwMDcuMTggMGwzNS44Ni0xOS45NXptLTI4Ljg1LTU1TDY2LjIxIDI2LjVjLS45Mi0xLjc4LTMuNDQtMS43OC00LjM2IDBMMjUuNyA5MC45NWw0OC43NC00OC44eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9JzAgMCAxMjggMTI4Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxnIGZpbGw9JyMxMTQ3OWUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSc2NCcgY3k9JzY0JyByPScxMS40Jz48L2NpcmNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0nTTEwNy4zIDQ1LjJjLTIuMi0uOC00LjUtMS42LTYuOS0yLjMuNi0yLjQgMS4xLTQuOCAxLjUtNy4xIDIuMS0xMy4yLS4yLTIyLjUtNi42LTI2LjEtMS45LTEuMS00LTEuNi02LjQtMS42LTcgMC0xNS45IDUuMi0yNC45IDEzLjktOS04LjctMTcuOS0xMy45LTI0LjktMTMuOS0yLjQgMC00LjUuNS02LjQgMS42LTYuNCAzLjctOC43IDEzLTYuNiAyNi4xLjQgMi4zLjkgNC43IDEuNSA3LjEtMi40LjctNC43IDEuNC02LjkgMi4zQzguMiA1MCAxLjQgNTYuNiAxLjQgNjRzNi45IDE0IDE5LjMgMTguOGMyLjIuOCA0LjUgMS42IDYuOSAyLjMtLjYgMi40LTEuMSA0LjgtMS41IDcuMS0yLjEgMTMuMi4yIDIyLjUgNi42IDI2LjEgMS45IDEuMSA0IDEuNiA2LjQgMS42IDcuMSAwIDE2LTUuMiAyNC45LTEzLjkgOSA4LjcgMTcuOSAxMy45IDI0LjkgMTMuOSAyLjQgMCA0LjUtLjUgNi40LTEuNiA2LjQtMy43IDguNy0xMyA2LjYtMjYuMS0uNC0yLjMtLjktNC43LTEuNS03LjEgMi40LS43IDQuNy0xLjQgNi45LTIuMyAxMi41LTQuOCAxOS4zLTExLjQgMTkuMy0xOC44cy02LjgtMTQtMTkuMy0xOC44ek05Mi41IDE0LjdjNC4xIDIuNCA1LjUgOS44IDMuOCAyMC4zLS4zIDIuMS0uOCA0LjMtMS40IDYuNi01LjItMS4yLTEwLjctMi0xNi41LTIuNS0zLjQtNC44LTYuOS05LjEtMTAuNC0xMyA3LjQtNy4zIDE0LjktMTIuMyAyMS0xMi4zIDEuMyAwIDIuNS4zIDMuNS45ek04MS4zIDc0Yy0xLjggMy4yLTMuOSA2LjQtNi4xIDkuNi0zLjcuMy03LjQuNC0xMS4yLjQtMy45IDAtNy42LS4xLTExLjItLjQtMi4yLTMuMi00LjItNi40LTYtOS42LTEuOS0zLjMtMy43LTYuNy01LjMtMTAgMS42LTMuMyAzLjQtNi43IDUuMy0xMCAxLjgtMy4yIDMuOS02LjQgNi4xLTkuNiAzLjctLjMgNy40LS40IDExLjItLjQgMy45IDAgNy42LjEgMTEuMi40IDIuMiAzLjIgNC4yIDYuNCA2IDkuNiAxLjkgMy4zIDMuNyA2LjcgNS4zIDEwLTEuNyAzLjMtMy40IDYuNi01LjMgMTB6bTguMy0zLjNjMS41IDMuNSAyLjcgNi45IDMuOCAxMC4zLTMuNC44LTcgMS40LTEwLjggMS45IDEuMi0xLjkgMi41LTMuOSAzLjYtNiAxLjItMi4xIDIuMy00LjIgMy40LTYuMnpNNjQgOTcuOGMtMi40LTIuNi00LjctNS40LTYuOS04LjMgMi4zLjEgNC42LjIgNi45LjIgMi4zIDAgNC42LS4xIDYuOS0uMi0yLjIgMi45LTQuNSA1LjctNi45IDguM3ptLTE4LjYtMTVjLTMuOC0uNS03LjQtMS4xLTEwLjgtMS45IDEuMS0zLjMgMi4zLTYuOCAzLjgtMTAuMyAxLjEgMiAyLjIgNC4xIDMuNCA2LjEgMS4yIDIuMiAyLjQgNC4xIDMuNiA2LjF6bS03LTI1LjVjLTEuNS0zLjUtMi43LTYuOS0zLjgtMTAuMyAzLjQtLjggNy0xLjQgMTAuOC0xLjktMS4yIDEuOS0yLjUgMy45LTMuNiA2LTEuMiAyLjEtMi4zIDQuMi0zLjQgNi4yek02NCAzMC4yYzIuNCAyLjYgNC43IDUuNCA2LjkgOC4zLTIuMy0uMS00LjYtLjItNi45LS4yLTIuMyAwLTQuNi4xLTYuOS4yIDIuMi0yLjkgNC41LTUuNyA2LjktOC4zem0yMi4yIDIxbC0zLjYtNmMzLjguNSA3LjQgMS4xIDEwLjggMS45LTEuMSAzLjMtMi4zIDYuOC0zLjggMTAuMy0xLjEtMi4xLTIuMi00LjItMy40LTYuMnpNMzEuNyAzNWMtMS43LTEwLjUtLjMtMTcuOSAzLjgtMjAuMyAxLS42IDIuMi0uOSAzLjUtLjkgNiAwIDEzLjUgNC45IDIxIDEyLjMtMy41IDMuOC03IDguMi0xMC40IDEzLTUuOC41LTExLjMgMS40LTE2LjUgMi41LS42LTIuMy0xLTQuNS0xLjQtNi42ek03IDY0YzAtNC43IDUuNy05LjcgMTUuNy0xMy40IDItLjggNC4yLTEuNSA2LjQtMi4xIDEuNiA1IDMuNiAxMC4zIDYgMTUuNi0yLjQgNS4zLTQuNSAxMC41LTYgMTUuNUMxNS4zIDc1LjYgNyA2OS42IDcgNjR6bTI4LjUgNDkuM2MtNC4xLTIuNC01LjUtOS44LTMuOC0yMC4zLjMtMi4xLjgtNC4zIDEuNC02LjYgNS4yIDEuMiAxMC43IDIgMTYuNSAyLjUgMy40IDQuOCA2LjkgOS4xIDEwLjQgMTMtNy40IDcuMy0xNC45IDEyLjMtMjEgMTIuMy0xLjMgMC0yLjUtLjMtMy41LS45ek05Ni4zIDkzYzEuNyAxMC41LjMgMTcuOS0zLjggMjAuMy0xIC42LTIuMi45LTMuNS45LTYgMC0xMy41LTQuOS0yMS0xMi4zIDMuNS0zLjggNy04LjIgMTAuNC0xMyA1LjgtLjUgMTEuMy0xLjQgMTYuNS0yLjUuNiAyLjMgMSA0LjUgMS40IDYuNnptOS0xNS42Yy0yIC44LTQuMiAxLjUtNi40IDIuMS0xLjYtNS0zLjYtMTAuMy02LTE1LjYgMi40LTUuMyA0LjUtMTAuNSA2LTE1LjUgMTMuOCA0IDIyLjEgMTAgMjIuMSAxNS42IDAgNC43LTUuOCA5LjctMTUuNyAxMy40eic+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3NOYW1lPSdyZWFjdCcgdmlld0JveD0nMCAwIDEyOCAxMjgnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGcgZmlsbD0nIzYxREFGQic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9JzY0JyBjeT0nNjQnIHI9JzExLjQnPjwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSdNMTA3LjMgNDUuMmMtMi4yLS44LTQuNS0xLjYtNi45LTIuMy42LTIuNCAxLjEtNC44IDEuNS03LjEgMi4xLTEzLjItLjItMjIuNS02LjYtMjYuMS0xLjktMS4xLTQtMS42LTYuNC0xLjYtNyAwLTE1LjkgNS4yLTI0LjkgMTMuOS05LTguNy0xNy45LTEzLjktMjQuOS0xMy45LTIuNCAwLTQuNS41LTYuNCAxLjYtNi40IDMuNy04LjcgMTMtNi42IDI2LjEuNCAyLjMuOSA0LjcgMS41IDcuMS0yLjQuNy00LjcgMS40LTYuOSAyLjNDOC4yIDUwIDEuNCA1Ni42IDEuNCA2NHM2LjkgMTQgMTkuMyAxOC44YzIuMi44IDQuNSAxLjYgNi45IDIuMy0uNiAyLjQtMS4xIDQuOC0xLjUgNy4xLTIuMSAxMy4yLjIgMjIuNSA2LjYgMjYuMSAxLjkgMS4xIDQgMS42IDYuNCAxLjYgNy4xIDAgMTYtNS4yIDI0LjktMTMuOSA5IDguNyAxNy45IDEzLjkgMjQuOSAxMy45IDIuNCAwIDQuNS0uNSA2LjQtMS42IDYuNC0zLjcgOC43LTEzIDYuNi0yNi4xLS40LTIuMy0uOS00LjctMS41LTcuMSAyLjQtLjcgNC43LTEuNCA2LjktMi4zIDEyLjUtNC44IDE5LjMtMTEuNCAxOS4zLTE4LjhzLTYuOC0xNC0xOS4zLTE4Ljh6TTkyLjUgMTQuN2M0LjEgMi40IDUuNSA5LjggMy44IDIwLjMtLjMgMi4xLS44IDQuMy0xLjQgNi42LTUuMi0xLjItMTAuNy0yLTE2LjUtMi41LTMuNC00LjgtNi45LTkuMS0xMC40LTEzIDcuNC03LjMgMTQuOS0xMi4zIDIxLTEyLjMgMS4zIDAgMi41LjMgMy41Ljl6TTgxLjMgNzRjLTEuOCAzLjItMy45IDYuNC02LjEgOS42LTMuNy4zLTcuNC40LTExLjIuNC0zLjkgMC03LjYtLjEtMTEuMi0uNC0yLjItMy4yLTQuMi02LjQtNi05LjYtMS45LTMuMy0zLjctNi43LTUuMy0xMCAxLjYtMy4zIDMuNC02LjcgNS4zLTEwIDEuOC0zLjIgMy45LTYuNCA2LjEtOS42IDMuNy0uMyA3LjQtLjQgMTEuMi0uNCAzLjkgMCA3LjYuMSAxMS4yLjQgMi4yIDMuMiA0LjIgNi40IDYgOS42IDEuOSAzLjMgMy43IDYuNyA1LjMgMTAtMS43IDMuMy0zLjQgNi42LTUuMyAxMHptOC4zLTMuM2MxLjUgMy41IDIuNyA2LjkgMy44IDEwLjMtMy40LjgtNyAxLjQtMTAuOCAxLjkgMS4yLTEuOSAyLjUtMy45IDMuNi02IDEuMi0yLjEgMi4zLTQuMiAzLjQtNi4yek02NCA5Ny44Yy0yLjQtMi42LTQuNy01LjQtNi45LTguMyAyLjMuMSA0LjYuMiA2LjkuMiAyLjMgMCA0LjYtLjEgNi45LS4yLTIuMiAyLjktNC41IDUuNy02LjkgOC4zem0tMTguNi0xNWMtMy44LS41LTcuNC0xLjEtMTAuOC0xLjkgMS4xLTMuMyAyLjMtNi44IDMuOC0xMC4zIDEuMSAyIDIuMiA0LjEgMy40IDYuMSAxLjIgMi4yIDIuNCA0LjEgMy42IDYuMXptLTctMjUuNWMtMS41LTMuNS0yLjctNi45LTMuOC0xMC4zIDMuNC0uOCA3LTEuNCAxMC44LTEuOS0xLjIgMS45LTIuNSAzLjktMy42IDYtMS4yIDIuMS0yLjMgNC4yLTMuNCA2LjJ6TTY0IDMwLjJjMi40IDIuNiA0LjcgNS40IDYuOSA4LjMtMi4zLS4xLTQuNi0uMi02LjktLjItMi4zIDAtNC42LjEtNi45LjIgMi4yLTIuOSA0LjUtNS43IDYuOS04LjN6bTIyLjIgMjFsLTMuNi02YzMuOC41IDcuNCAxLjEgMTAuOCAxLjktMS4xIDMuMy0yLjMgNi44LTMuOCAxMC4zLTEuMS0yLjEtMi4yLTQuMi0zLjQtNi4yek0zMS43IDM1Yy0xLjctMTAuNS0uMy0xNy45IDMuOC0yMC4zIDEtLjYgMi4yLS45IDMuNS0uOSA2IDAgMTMuNSA0LjkgMjEgMTIuMy0zLjUgMy44LTcgOC4yLTEwLjQgMTMtNS44LjUtMTEuMyAxLjQtMTYuNSAyLjUtLjYtMi4zLTEtNC41LTEuNC02LjZ6TTcgNjRjMC00LjcgNS43LTkuNyAxNS43LTEzLjQgMi0uOCA0LjItMS41IDYuNC0yLjEgMS42IDUgMy42IDEwLjMgNiAxNS42LTIuNCA1LjMtNC41IDEwLjUtNiAxNS41QzE1LjMgNzUuNiA3IDY5LjYgNyA2NHptMjguNSA0OS4zYy00LjEtMi40LTUuNS05LjgtMy44LTIwLjMuMy0yLjEuOC00LjMgMS40LTYuNiA1LjIgMS4yIDEwLjcgMiAxNi41IDIuNSAzLjQgNC44IDYuOSA5LjEgMTAuNCAxMy03LjQgNy4zLTE0LjkgMTIuMy0yMSAxMi4zLTEuMyAwLTIuNS0uMy0zLjUtLjl6TTk2LjMgOTNjMS43IDEwLjUuMyAxNy45LTMuOCAyMC4zLTEgLjYtMi4yLjktMy41LjktNiAwLTEzLjUtNC45LTIxLTEyLjMgMy41LTMuOCA3LTguMiAxMC40LTEzIDUuOC0uNSAxMS4zLTEuNCAxNi41LTIuNS42IDIuMyAxIDQuNSAxLjQgNi42em05LTE1LjZjLTIgLjgtNC4yIDEuNS02LjQgMi4xLTEuNi01LTMuNi0xMC4zLTYtMTUuNiAyLjQtNS4zIDQuNS0xMC41IDYtMTUuNSAxMy44IDQgMjIuMSAxMCAyMi4xIDE1LjYgMCA0LjctNS44IDkuNy0xNS43IDEzLjR6Jz48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy9zYXNzL3Nhc3Mtb3JpZ2luYWwuc3ZnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbi9pY29ucy90eXBlc2NyaXB0L3R5cGVzY3JpcHQtb3JpZ2luYWwuc3ZnJyAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD0ncHJvamV0b3MnIGNsYXNzTmFtZT0nYy1wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgIDxoMj5QUk9KRVRPUzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLW5leHQtcHJldi1wcm9qZWN0cyc+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17bmV4dFByZXZQcm9qZWN0czF9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdHMtMSBjLWdyb3VwLWJ1dHRvbi1wcm9qZWN0cyBhY3RpdmUnPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e25leHRQcmV2UHJvamVjdHMyfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3RzLTIgYy1ncm91cC1idXR0b24tcHJvamVjdHMnPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYm94JyBpZD0nanMtYm94Jz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0ICc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9sZXRtZWFzay5naWYnXHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3RfY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPkxldG1lYXNrPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgIExldG1lYXNrIMOpIHVtYSBhcGxpY2HDp8OjbyBwYXJhIHRpcmFyIGTDunZpZGFzIGVtIHF1ZSBvXHJcbiAgICAgICAgICAgICAgICAgICAgICB1c3XDoXJpbyBwcmVjaXNhIGxvZ2FyIGNvbSBvIGdvb2dsZSBwYXJhIG1hbmRhciBhcyBzdWFzXHJcbiAgICAgICAgICAgICAgICAgICAgICBkw7p2aWRhcyBlIG8gYWRtaW5pc3RyYWRvciBlbSB1bWEgYXVsYSBvbmxpbmUgb3Ugc3RyZWFtXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25kZSwgcG9kZW5kbyBtYXJjYXIgYXMgcmVzcG9zdGFzIHNlbmRvIHJlc3BvbnNpZGFzIG5vXHJcbiAgICAgICAgICAgICAgICAgICAgICBtb21lbnRvLCBtYXJjYXIgY29tbyByZXNwb25kaWRhIG91IGFwYWdhci4gVXRpbGl6YW5kb1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhY3QsIHR5cGVzY3JpcHQgZSBmaXJlYmFzZS5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1idXR0b25zJz5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly9sZXRtZWFzay0yYzIyMi53ZWIuYXBwJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tc2l0ZSc+U0lURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9sZXRtZWFzayc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QgYmctMic+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9tb3ZlLWl0LmdpZidcclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+TW92ZSBpdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBPIG1vdmUuaXQgw6kgdW0gYXBwIHF1ZSB1bmUgYSB0w6ljbmljYSBkZSBQb21vZG9ybyBjb20gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhbGl6YcOnw6NvIGRlIGV4ZXJjw61jaW9zIGbDrXNpY29zIHBhcmEgcXVlbSBwYXNzYSBtdWl0b1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGVtcG8gbmEgZnJlbnRlIGRvIGNvbXB1dGFkb3IuIENvbnRhbmRvIGNvbSB1bSBzaXN0ZW1hIGRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcm1hemVuYW1lbnRvIGxvY2FsIHBhcmEgY2FzbyBvIHVzdcOhcmlvIG7Do28gcXVlcmlhIGxvZ2FyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZSB1bSBhcm1hemVuYW1lbnRvIG5hIG51dmVtIGNvbSBmaXJlYmFzZSwgdXRpbGl6YW5kbyBhXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRlbnRpY2HDp8OjbyBjb20gbyBnb29nbGUuIENyaWFkbyBjb20gUmVhY3QsIEZpcmViYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgVHlwZVNjcmlwdCwgTWF0ZXJpYWwtVUkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYnV0dG9ucyc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9tb3ZlLWl0LXRocmVlLW9tZWdhLnZlcmNlbC5hcHAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdidG4tc2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNJVEVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9tb3ZlLWl0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuLWdpdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdJVEhVQlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLXByb2plY3QnPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2MtcHJvamVjdC1pbWcnXHJcbiAgICAgICAgICAgICAgICAgIHNyYz0nLi9pbWFnZXMvcHJvamVjdHMvTmV4dC1MZXZlbC1XZWVrLUhlYXQuZ2lmJ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5OZXh0IExldmVsIFdlZWsgSGVhdDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVbWEgYXBsaWNhw6fDo28gZGUgbG9naW4gZSBhdXRlbnRpY2HDp8OjbyBjb20gZ2l0aHViIHBhcmEgb1xyXG4gICAgICAgICAgICAgICAgICAgICAgZW52aW8gZSByZWNlYmltZW50byBkZSBtZW5zYWdlbSBlbSB0ZW1wbyByZWFsLiBVdGlsaXphbmRvXHJcbiAgICAgICAgICAgICAgICAgICAgICBSZWFjdCwgVHlwZXNjcmlwdCwgU2FzcywgQXhpb3MgZSBTb2NrZXQgSU8gcGFyYSBvXHJcbiAgICAgICAgICAgICAgICAgICAgICBGcm9udC1FbmQsIFByaXNtYSwgRXhwcmVzcyBlIEpXVCBubyBCYWNrLUVuZCwgUmVhY3RcclxuICAgICAgICAgICAgICAgICAgICAgIE5hdGl2ZSwgRXhwbyBlIE1vdGkgbm8gbW9iaWxlLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL05leHQtTGV2ZWwtV2Vlay1IZWF0Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuLWdpdCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdJVEhVQlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICB7LyogRGl2aXPDo28gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9lLWRpYXJpc3RhLmdpZidcclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+RS1kaWFyaXN0YXM8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgRS1kaWFyaXN0YXMgw6kgdW0gcHJvamV0byBzaW1wbGVzIGNvbSByZWFjdCBlIHJlYWN0IG5hdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tIHVtYSBww6FnaW5hIHF1ZSBjb25zdW1lIHVtYSBhcGkgZSBkZXBvaXMgcmVuZGVyaXphIG5hXHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZWxhIG9zIGRhZG9zIHJlY2ViaWRvcy4gTyB1c28gZGEgYXBsaWNhw6fDo28gw6kgcGFyYVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvY3VyYXIgZGlhcmlzdGFzIGRpc3BvbsOtdmVpcyBuYSByZWdpw6NvLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9UaHlhZ29BcmF1am9NL0UtZGlhcmlzdGFzJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tZ2l0Jz5HSVRIVUI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdCBiZy0yJz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjLXByb2plY3QtaW1nJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9Jy4vaW1hZ2VzL3Byb2plY3RzL2RldmZpbmFuY2UucG5nJ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9JydcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0X2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZXYkZmluYW5jZTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEZXYkZmluYW5jZSDDqSB1bSBwcm9qZXRvIGZlaXRvIGR1cmFudGUgdW1hIG1hcmF0b25hIGRhXHJcbiAgICAgICAgICAgICAgICAgICAgICBSb2NrZXRzZWF0LCB1dGlsaXphbmRvIEh0bWwsIENzcyBlIEphdmFzY3JpcHQgZSBzdWEgZnVuw6fDo29cclxuICAgICAgICAgICAgICAgICAgICAgIMOpIGFqdWRhciBuYSBvcmdhbml6YcOnw6NvIGRlIGdhc3RvcyBtZW5zYWlzLCB0dWRvIHV0aWxpemFuZG9cclxuICAgICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZSBwYXJhIG7Do28gcGVyZGVyIG9zIGRhZG9zLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vdGh5YWdvYXJhdWpvbS5naXRodWIuaW8vRGV2LWZpbmFuY2UnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0YXJnZXQ9J19ibGFuaycgY2xhc3NOYW1lPSdidG4tc2l0ZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNJVEVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vVGh5YWdvQXJhdWpvTS9EZXYtZmluYW5jZSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2J0bi1naXQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHSVRIVUJcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYy1wcm9qZWN0ICc+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYy1wcm9qZWN0LWltZydcclxuICAgICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy9wcm9qZWN0cy9xdWl6LmdpZidcclxuICAgICAgICAgICAgICAgICAgYWx0PScnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtcHJvamVjdF9jb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+UXVpejwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBVbSBhcGxpY2HDp8OjbyBvbmRlIG8gdXN1w6FyaW8gZGVjaWRlIHF1YW50YXMgcGVyZ3VudGFzXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZXNlamEgcmVzcG9uZGVyLCBkZSB0ZW1hcyBlIGRpZmljdWxkYWRlcyBhbGVhdMOzcmlhcywgYXDDs3NcclxuICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbmRlciBvIHVzdcOhcmlvIHBvZGUgdmVyIG8gcmVzdWx0YWRvIGUgZGVjaWRpciBkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2FsdmFyIG8gcXVlc3Rpb27DoXJpbyBwYXJhIHNlIHF1aXNlciByZXZlciBvIHJlc3VsdGFkb1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3V0cmEgaG9yYS4gVXRpbGl6YW5kbyBSZWFjdCwgVHlwZVNjcmlwdCwgRm9ybWlrLCBBeGlvcyBlXHJcbiAgICAgICAgICAgICAgICAgICAgICBNYXRlcmlhbC1VSSBwYXJhIGEgY29uc3RydcOnw6NvIGRhIGFwbGljYcOnw6NvLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjLWJ1dHRvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPSdodHRwczovL3F1aXotdHkudmVyY2VsLmFwcCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNpdGUnPlNJVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00vUXVpeic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLWdpdCc+R0lUSFVCPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2MtYWJvdXQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYWJvdXQnPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjLWRldGFpbHMtMScgc3JjPScuL2ltYWdlcy9kZXRhaWxzLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2MtYWJvdXQtY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8aDI+U09CUkUgTUlNPC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICBTb3UgdW0gcHJvZ3JhbWFkb3IgZW0gYnVzY2EgZGUgdW1hIG9wb3J0dW5pZGFkZSBwYXJhIGVudHJhciBub1xyXG4gICAgICAgICAgICAgICAgICBtZXJjYWRvLiBKw6EgdGVuaG8gZXhwZXJpw6puY2lhIG5hIGNyaWHDp8OjbyBkZSBzaXRlcyByZXNwb25zaXZvc1xyXG4gICAgICAgICAgICAgICAgICBlIGVzdG91IHNlbXByZSBidXNjYW5kbyBhcHJlbmRlciBub3ZhcyBmZXJyYW1lbnRhcyBwYXJhXHJcbiAgICAgICAgICAgICAgICAgIG1lbGhvcmFyIG8gbWV1IHRyYWJhbGhvLCBjb20gNDArIGhvcmFzIGVtIGN1cnNvcyBlIDEwMCsgaG9yYXNcclxuICAgICAgICAgICAgICAgICAgZW0gcHLDoXRpY2EuIEF0dWFsbWVudGUgZXN0b3UgZm9jYW5kbyBtZXVzIGVzdHVkb3MgZW0gY3JpYcOnw6NvXHJcbiAgICAgICAgICAgICAgICAgIGRlIGFwbGljYcOnw7VlcyBjb20gUmVhY3QsIFR5cGVzY3JpcHQgZSBOb2RlLlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFZvY8OqIHBvZGUgZW5jb250cmFyIG1haXMgc29icmUgbWV1cyBwcm9qZXRvcyBlIG1pbmhhIHJvdGluYSBkZVxyXG4gICAgICAgICAgICAgICAgICBlc3R1ZG9zIGVtIG1pbmhhIGNvbnRhIG5vICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9J19ibGFuaycgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1RoeWFnb0FyYXVqb00nPlxyXG4gICAgICAgICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy4vYXNzZXRzL0NWLnBkZicgZG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24+Q1VSUsONQ1VMTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYy1lbWFpbCc+XHJcbiAgICAgICAgICAgICAgICAgIHRoeWFnb2FyYXVqb21vdHRhQGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjb3B5VGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy4vaW1hZ2VzL2NvcHktaWNvbi5zdmcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjLWNvcHknPmUtbWFpbCBjb3BpYWRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgKDI3KSA5IDk5NzUtNTY4NFxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1Mjc5OTk3NTU2ODQnXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL2ltYWdlcy93aGF0cy1pY29uLnN2ZycgYWx0PScnIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYy1kZXRhaWxzLTInIHNyYz0nLi9pbWFnZXMvZGV0YWlscy5zdmcnIGFsdD0nJyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2JvZHk+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5VGV4dCgpIHtcclxuICBsZXQgdGV4dCA9IFwidGh5YWdvYXJhdWpvbW90dGFAZ21haWwuY29tXCI7XHJcbiAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLWNvcHlcIikuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLWNvcHlcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0sIDEwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZUVudGVyKCkge1xyXG4gIG1vdXNlZW50ZXIgPSB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb3VzZU91dCgpIHtcclxuICBtb3VzZWVudGVyID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMxKCkge1xyXG4gIG5leHRQcmV2UHJvamVjdHMoMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMyKCkge1xyXG4gIG5leHRQcmV2UHJvamVjdHMoMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5leHRQcmV2UHJvamVjdHMocHJvamVjdCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1ncm91cC1idXR0b24tcHJvamVjdHNcIikuZm9yRWFjaCgoaSkgPT4ge1xyXG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYy1ncm91cC1wcm9qZWN0c1wiKS5mb3JFYWNoKChpKSA9PiB7XHJcbiAgICBpLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgaWYgKGxhc3RDb250YWluZXIgPCBwcm9qZWN0KSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIilcclxuICAgICAgLnNjcm9sbEJ5KDkwMCAqIChwcm9qZWN0IC0gbGFzdENvbnRhaW5lciksIDApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNqcy1ib3hcIilcclxuICAgICAgLnNjcm9sbEJ5KDkwMCAqIChwcm9qZWN0IC0gbGFzdENvbnRhaW5lciksIDApO1xyXG4gIH1cclxuICBsYXN0Q29udGFpbmVyID0gcHJvamVjdDtcclxuXHJcbiAgaWYgKHByb2plY3QgPT0gMSkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLXByb2plY3RzLTFcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9IGVsc2UgaWYgKHByb2plY3QgPT0gMikge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jLXByb2plY3RzLTJcIikuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkhlYWQiLCJub3RNb2JpbGUiLCJjdXJyZW50UHJvamVjdCIsIm1heFByb2plY3RzIiwibW91c2VlbnRlciIsInByb2plY3QiLCJsYXN0Q29udGFpbmVyIiwiSG9tZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIk51bWJlciIsImxlbmd0aCIsImkiLCJhZGRFdmVudExpc3RlbmVyIiwibW91c2VFbnRlciIsIm1vdXNlT3V0Iiwic2V0SW50ZXJ2YWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEJ5IiwibmV4dFByZXZQcm9qZWN0czEiLCJuZXh0UHJldlByb2plY3RzMiIsImNvcHlUZXh0IiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJuZXh0UHJldlByb2plY3RzIiwiZm9yRWFjaCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=