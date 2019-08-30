import React, {Component} from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

import SearchForm from './components/SearchForm';


class App extends Component {
  state = {
    books: [],
    q: "",
  }

  componentWillMount(){
    axios.get('http://localhost:8000/books/'+ this.state.q).then((response) => {
      this.setState({
        books: response.data
      })
    });
  }

  getSearch = (e) => {
    e.preventDefault();
    const search = e.target.elements.search.value;
    this.setState({
      q: search
    })
    axios.get('http://localhost:8000/books/?search='+ this.state.q).then((response) => {
      this.setState({
        books: response.data
      })
    });
  }

  render () {
    
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.title}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.publisher}</td>
        <td>{book.publication_year}</td>
        <td>{book.category}</td>
      </tr> 
      )

    });
    console.log(this.state)
    return (
      <div className="App container">
        
      <SearchForm getSearch={this.getSearch}/>
      <Table className="mt-4">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Editorial</th>
            <th>Año de Edición</th>
            <th>Categoría</th>
          </tr>
        </thead>

        <tbody>
          {books}
        </tbody>
      </Table>
    </div>
    );
  }
}

export default App;
