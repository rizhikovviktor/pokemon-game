import { useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import cn from 'classnames';

import HomePage from "./routs/Home";
import GamePage from "./routs/Game";
import AboutPage from "./routs/About";
import ContactPage from "./routs/Contact";
import NotFoundPage from "./routs/NotFound";

import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";

import styles from "./style.module.css";

const App = () => {
    const match = useRouteMatch('/');
    return (
        <Switch>
            <Route path="/404" render={NotFoundPage} />

            <Route>
                <>
                    <MenuHeader bgActive={!match.isExact}/>
                    <div className={cn(styles.wrap, {
                        [styles.isHomePage]: match.isExact
                    })}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" render={AboutPage}/>
                            <Route path="/contact" render={ContactPage}/>
                            <Route render={() => (
                                <Redirect to="/404"/>
                            )}/>
                        </Switch>
                    </div>
                    <Footer />
                </>
            </Route>
        </Switch>
    )
};

export default App;