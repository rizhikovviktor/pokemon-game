const GamePage = ({onChangePage}) => {
    const handlerOnClick = () => {
        onChangePage && onChangePage('app');
    };

    return (
        <div>
            <button onClick={handlerOnClick}>Back to Main</button>
            This is Game Page!!!
        </div>
    );
};

export default GamePage;