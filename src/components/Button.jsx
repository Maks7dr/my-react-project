import clsx from "clsx";
import "./Button.css";

export const Button = ({ variant, children }) => {
  // Базові стилі кнопки з кількома варіантами відображення
  return <button className={clsx("button", variant)}>{children}</button>;
};

export const LoginButton = () => {
  // Унікальна логіка кнопки логіна
  return <Button variant="primary">Login</Button>;
};

export const FollowButton = () => {
  // Унікальна логіка кнопки підписки
  return <Button variant="secondary">Follow</Button>;
};
