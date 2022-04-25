import './App.css';
import React, {Component} from "react"
import {BrowserRouter as Router, Navigate, Redirect, Route, Routes} from 'react-router-dom'
import LibraryService from "../../repository/LibraryRepository";
import Books from '../Books/BookList/books'
import BookEdit from "../Books/BookEdit/bookEdit";
import Categories from "../Categories/categories";
import Header from "../Header/header"
import BookAdd from "../Books/BookAdd/bookAdd";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories :[],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <main>
                    <Header/>
                    <div className="container">
                        <Routes>
                            <Route path={"/categories"} element={ <Categories categories={this.state.categories}  />}/>
                            <Route path={"/books/add"} element={<BookAdd categories={this.state.categories}
                                                                         authors={this.state.authors}
                                                                         onBookAdd={this.addBook}/>}/>
                            <Route path={"/books/edit/:id"} element={<BookEdit onEditBook={this.editBook} book={this.state.selectedBook}
                                                                               categories={this.state.categories} authors={this.state.authors}/>}/>
                            <Route path={"/books"} element={ <Books books={this.state.books}  onDelete={this.deleteBook}  onEdit={this.getBook} onMarkAsTaken={this.markAsTaken}/>}/>
                            <Route path="/" element={<Navigate to="/books" replace />}/>
                        </Routes>
                    </div>
                </main>
            </Router>

        );
    }
    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    deleteBook= (id) =>{
        LibraryService.deleteBook(id)
            .then(()=> {
                this.loadBooks()
            });
    }
    getBook= (id) => {
        LibraryService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                });
            })
    }
    editBook= (id,name,category,author,copies) => {
        LibraryService.editBook(id,name,category,author,copies)
            .then(()=> {
                this.loadBooks()
            });
    }
    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }
    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    addBook= (name,category,author,copies) => {
        LibraryService.addBook(name,category,author,copies)
            .then(()=> {
                this.loadBooks()
            });
    }
    markAsTaken = (id) => {
        LibraryService.markAsTaken(id)
            .then(()=> {
                this.loadBooks()
            });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadAuthors();

    }
}

export default App;