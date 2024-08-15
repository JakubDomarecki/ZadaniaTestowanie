export function UserProfile({ name, surname, email, avatarUrl }) {
  const defaultMessage = "Information not provided";

  return (
    <div className="user-profile">
      {avatarUrl && <img src={avatarUrl} alt="User avatar" />}
      <p>Name: {name ?? defaultMessage}</p>
      <p>Surname: {surname ?? defaultMessage}</p>
      <p>Email: {email?? defaultMessage}</p>
    </div>
  );
}