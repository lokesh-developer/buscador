import TelegramLoginButton from "react-telegram-login";

export const TeleLogin = () => {
  const getUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log(user);
  };
  const style = {
    float: "right",
    margin: "10px",
  };
  return (
    <div style={style}>
      <TelegramLoginButton
        dataSize="large"
        dataOnauth={getUser}
        botName="buscadorXbot"
      />
    </div>
  );
};
