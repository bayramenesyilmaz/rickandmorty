import "./ErrorPage.css"

interface ErrorPageProps {
    error: Error;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error }) => {
    return (
        <div className='err-page-container'>
            <h1 >Oops! Something went wrong.</h1>
            <p >{error.message}</p>
        </div>
    );
};

export default ErrorPage;
