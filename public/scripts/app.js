"use strict";

// "use strict"


var appRoot = document.getElementById("app");
var app = {
  title: "Indecision app",
  headerComment: "put your life in the hands of a computer.",
  options: []
};

var formSubmit = function formSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  option && addOption(option);
  e.target.elements.option.value = '';
  renderApp();
};

var addOption = function addOption(v) {
  var ele = React.createElement(
    "ol",
    null,
    v
  );
  app.options.push(ele);
  renderApp();
};

var removeAll = function removeAll() {
  app.options = [];
  renderApp();
};

var randomChoice = function randomChoice() {
  var idxChoice = Math.floor(Math.random() * app.options.length);
  alert(app.options[idxChoice]);
};

function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "header",
      null,
      React.createElement(
        "h1",
        null,
        app.title
      ),
      React.createElement(
        "p",
        null,
        app.headerComment
      )
    ),
    React.createElement(
      "section",
      null,
      React.createElement(
        "button",
        { onClick: randomChoice },
        "What Should I Do?"
      ),
      React.createElement(
        "button",
        { onClick: removeAll },
        "Remove all"
      ),
      React.createElement(
        "form",
        { onSubmit: formSubmit },
        React.createElement(
          "ol",
          null,
          app.options.map(function (option) {
            return React.createElement(
              "li",
              null,
              option,
              " ",
              React.createElement(
                "button",
                null,
                "remove"
              )
            );
          })
        ),
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          null,
          "Add element"
        )
      )
    )
  );
  ReactDOM.render(template, appRoot);
}

renderApp();
