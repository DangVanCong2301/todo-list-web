import html from "../core/core.js";
import header from "../component/header.js";
import TodoList from "../component/TodoList.js";
import footer from "../component/footer.js";
import {connect} from "../store/store.js"

function app({todos}){
    return html `
        <section class="todoapp">
            ${header()}
            ${todos.length > 0 &&  TodoList()}
            ${todos.length > 0 && footer()}
        </section>
    `
}
export default connect()(app)