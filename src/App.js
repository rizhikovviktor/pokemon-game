import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import PokemonCard from "./components/PokemonCard";
import Footer from "./components/Footer";

import LayoutBg2 from "./assets/bg2.jpg";
import LayoutBg3 from "./assets/bg3.jpg";
import POKEMONS from "./pokemons_data";

const App = () => {
    return (
        <>
            <Header title='This is title' descr='This is Description!' />
            <Layout
                title='This is Layout 1 title'
                urlBg={LayoutBg3}
            >
                <p>
                    In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
                </p>
                <p>
                    Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.
                </p>
                <p>
                    To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this,
                    the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared.
                    If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's
                    rank is higher, the opponent's card will be captured and changed into the player's color instead.
                </p>
            </Layout>
            <Layout
                title='This is Layout 2 title'
                colorBg='rgba(220, 204, 129, 0.52)'
            >
                <div className="flex">
                    {
                        POKEMONS.map(item  => <PokemonCard key={item.id} name={item.name} img={item.img} type={item.type} values={item.values} />)
                    }
                </div>
            </Layout>
            <Layout
                title='This is Layout 3 title'
                urlBg={LayoutBg2}
            />
            <Footer />
        </>
    );
}

export default App;
