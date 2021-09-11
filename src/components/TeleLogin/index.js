import TelegramLoginButton from "react-telegram-login";

export const TeleLogin = () => {
  const getUser = (user) => {
    console.log(user);
  };

  return <TelegramLoginButton dataOnauth={getUser} botName="buscadorXbot" />;
};
