import ReactDOM from 'react-dom/client';

import './index.css'

const BookList = () => {
  return (
    <article className='booklist'>
      <Book />
      <Book />
      <Book />
    </article>
  );
}

const Book = () => {
  return (
    <section className='book'> 
      <Image />
      <Title />
      <Author />
    </section>
  );
}

const Image = () => {
  return <img src='https://images-na.ssl-images-amazon.com/images/I/71vKs9fwurL._AC_UL600_SR600,400_.jpg' />;
}

const Title = () => {
  return <h6>Unbroken Bonds of Battle: A Modern Warriors Book of Heroism, Patriotism, and Friendship</h6>;
}
const Author = () => {
  return <h6>Johnny Joey Jones</h6>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);