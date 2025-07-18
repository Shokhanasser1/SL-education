import './UsersStyle.scss';
export default function Profile() {
    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <p>Welcome, {localStorage.getItem("username") || "Guest"}!</p>
            <p>Your role: {localStorage.getItem("token") || "Not logged in"}</p>
        </div>
    );
}