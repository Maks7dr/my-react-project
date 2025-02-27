export default function BookList({ books }) {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <p>{book.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
