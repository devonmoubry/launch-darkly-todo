import classNames from "classnames";
import { useReducer } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

import { todoReducer } from "./reducer";

import "./app.css";
import "./theme.css";

export function App() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <div className={classNames({ 'new-theme': true })}>
            <Header dispatch={dispatch} />
            <Main todos={todos} dispatch={dispatch} />
            <Footer todos={todos} dispatch={dispatch} />
        </div>
    );
}
