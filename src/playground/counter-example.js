
let appRoot = document.getElementById("app");

let template = (
    <div>
        <h1>Add Something TO List</h1>
        <form>
            <input type="text" name="option"></input>
        </form>
    </div>
)

function renderApp() {
    ReactDOM.render(template, appRoot)
}

