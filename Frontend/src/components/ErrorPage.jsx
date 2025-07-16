import './style.scss';

export default function errorPage() {

    return (
        <div className="error-page">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <a href="/">Go to Home Page</a>
        </div>
    )
}