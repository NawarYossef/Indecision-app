// "use strict"


let appRoot = document.getElementById("app");
let app = {
  title: "Indecision app",
  headerComment: "put your life in the hands of a computer.",
  options: []
}


let formSubmit = (e) => {
    e.preventDefault()
    let option = e.target.elements.option.value
    option && addOption(option);
    e.target.elements.option.value = ''
    renderApp();
}


let addOption = (v) => {
    let ele = <ol>{v}</ol>
    app.options.push(ele)
    renderApp()
} 

let removeAll = () => {
   app.options = [];
   renderApp()
}

let randomChoice = () => {
  let idxChoice = Math.floor(Math.random() * app.options.length)
  alert(app.options[idxChoice])
}

function renderApp() {
    let template = (
      <div>

      <header>
        <h1>{app.title}</h1>
        <p>{app.headerComment}</p>
      </header>

      <section>
        <button onClick={randomChoice}>What Should I Do?</button>
        <button onClick={removeAll}>Remove all</button>

        <form onSubmit={formSubmit}>
            <ol>
             {
               app.options.map((option) => {
                return <li>{option} {<button>remove</button>}</li>
               })
              }
            </ol>
            <input type="text" name="option"></input>
            <button>Add element</button>
        </form>

      </section>
    </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()

