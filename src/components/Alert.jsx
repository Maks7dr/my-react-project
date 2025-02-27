// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({ variant, children }) => {
//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// import "./Alert.css";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   // Перший варінт
//   if (outlined) {
//     classNames.push("is-outlined");
//   }

//   if (elevated) {
//     classNames.push("is-elevated");
//   }

//   // Другий варінт

//   //   if (outlined) {
//   //     classNames.push("is-outlined");
//   //   } else {
//   //     classNames.push("is-elevated");
//   //   }
//   // Третій варіант

//   //   outlined ? classNames.push("is-outlined") : classNames.push("is-elevated");

//   return <p className={classNames.join(" ")}>{children}</p>;
// };

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

import clsx from "clsx";
import css from "./Alert.module.css";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};
