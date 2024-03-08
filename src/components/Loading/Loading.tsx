import "./Loading.css";

const Loading: React.FC = () => {
    return (
        <div className='loading-container'>
            <div className="content">
                <img
                    src="/images/rickandmortylogo.png"
                    alt="rick-and-morty-logo"
                    className="loading-logo"
                />
            </div>
        </div>
    );
};

export default Loading;
