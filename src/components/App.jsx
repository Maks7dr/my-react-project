import "./App.css";
import Product from "./Product";
import BookList from "./Booklist";
import { Button } from "./Button";
import { Alert } from "./Alert";
import { HiUser } from "react-icons/hi";

// export default function App() {
//   return (
//     <div>
//       <h1>Best selling</h1>

//       <Product name="Tacos With Lime" price={10.99} />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
//         price={14.29}
//       />
//     </div>
//   );
// }

const favBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
];

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <BookList books={favBooks} />
      <div>
        <h1>Best selling</h1>

        <Product name="Tacos With Lime" price={10.99} />
        <Product
          name="Fries and Burger"
          imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
          price={14.29}
        />
      </div>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
      <div>
        <p>
          <HiUser className="my-icon" size="24" />
        </p>
      </div>
      <Button variant="primary">Login</Button>
      <Button variant="secondary">Follow</Button>
    </>
  );
}
