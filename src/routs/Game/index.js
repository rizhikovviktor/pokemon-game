import {useState} from "react";
import {Switch, useRouteMatch, Route} from 'react-router-dom';
import StartPage from "./routs/Start";
import BoardPage from "./routs/Board";
import FinishPage from "./routs/Finish";
import {PokemonContext} from "../../context/pokemonContext";


const GamePage = () => {
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const match = useRouteMatch();

    const handleSelectedPokemons = (id, curPokemon) => {
        setSelectedPokemons(prev => {
            if (prev[id]) {
                const newState = {...prev};
                delete newState[id];

                return newState;
            }

            return {
                ...prev,
                [id]: curPokemon
            }
        })
    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemons,
            onSelectedPokemons: handleSelectedPokemons
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage} />
                <Route path={`${match.path}/board`} component={BoardPage} />
                <Route path={`${match.path}/finish`} component={FinishPage} />
            </Switch>
        </PokemonContext.Provider>
    );
};

export default GamePage;