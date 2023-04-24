import { createStore } from "../core/core.js";
import reducer from "../reducers/reducer.js";
import withLogger from "../logger/logger.js"

const {attach, connect, dispatch} = createStore(withLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect
}