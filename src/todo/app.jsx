import classNames from "classnames";
import { useReducer } from "react";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import { withLDProvider } from 'launchdarkly-react-client-sdk';
import { useFlags } from 'launchdarkly-react-client-sdk';

import { todoReducer } from "./reducer";

import "./app.css";
import "./theme.css";

function App() {
    const flags = useFlags();
    const featureFlag = flags.exp1;
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <div className={ classNames({'new-theme' : featureFlag})}>
            <Header dispatch={dispatch} />
            <Main todos={todos} dispatch={dispatch} />
            <Footer todos={todos} dispatch={dispatch} />
        </div>
    );
}

export default withLDProvider({
    clientSideID: CLIENT_SIDE_ID,
    context: {
      "kind": "user",
      "key": "example_user",
      "name": "Example user",
      "email": "User@example.com"
    }
})(App);
