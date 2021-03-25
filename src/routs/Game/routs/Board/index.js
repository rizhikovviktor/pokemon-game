import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext} from "react";
import {useEffect} from "react";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import PokemonCard from "../../../../components/PokemonCard";
import styles from "./style.module.css"
import PlayerBoard from "./component/PlayerBoard";

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        console.log(item);
        if (item.card.possession === 'red') {
            player2Count++;
        }

        if (item.card.possession === 'blue'){
            player1Count++;
        }
    })

    return [player1Count,player2Count];
}

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);
    const [board, setBoard] = useState([]);
    const [player2, setPayer2] = useState([]);
    const [player1, setPayer1] = useState(() => {
        return Object.values(pokemons).map(item => ({
            ...item,
            possession: 'blue',
        }))
    });
    const [choiceCard, setChoiceCard] = useState(null);
    const [steps, setSteps] = useState(0);

    const history = useHistory();

    useEffect(async() => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json()

        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();

        setPayer2(() => {
            return player2Request.data.map(item => ({
                ...item,
                possession: 'red',
            }))
        })

    }, []);

    const handlerClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board,
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(params)
            })
            const request = await res.json();

            if (choiceCard.player === 1) {
                setPayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            if (choiceCard.player === 2) {
                setPayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            setBoard(request.data);
            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
        }
    }

    useEffect(() => {
        console.log(steps);
        if (steps ===9) {
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                alert('WIN');
            } else if (count1 < count2) {
                alert('Lose');
            } else {
                alert('DRAW');
            }
        }
    }, [steps]);

    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }

    return (
        <PokemonContext.Provider value={{}}>
            <div className={styles.root}>
                <div className={styles.playerOne}>
                    <PlayerBoard
                        player={1}
                        cards={player1}
                        onClickCard={(card) => setChoiceCard(card)}
                    />
                </div>
                <div className={styles.board}>
                    {
                        board.map(item => (
                          <div
                            key={item.position}
                            className={styles.boardPlate}
                            onClick={() => !item.card && handlerClickBoardPlate(item.position)}
                          >
                              {
                                  item.card && <PokemonCard {...item.card} isActive minimize />
                              }
                          </div>
                        ))
                    }
                </div>
                <div className={styles.playerTwo}>
                    <PlayerBoard
                        player={2}
                        cards={player2}
                        onClickCard={(card) => setChoiceCard(card)}
                    />
                </div>
            </div>
        </PokemonContext.Provider>
    );
};

export default BoardPage;