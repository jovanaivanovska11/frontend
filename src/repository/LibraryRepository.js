import axios from '../custom-axios/axios';

const LibraryService = {
    fetchBooks: () => {
        return axios.get("/books",{
            params: {
                size: 5,
                batch: 2
            }
        });
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    editBook:(id,name, category, author, copies) => {
        return axios.put(`/books/edit/${id}`,{
            "name" : name,
            "category" : category,
            "author" : author,
            "copies" : copies,
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    addBook:(name, category, author, copies) => {
        return axios.post(`/books/add/`,{
            "name" : name,
            "category" : category,
            "author" : author,
            "copies" : copies,
        });
    },
    markAsTaken: (id) =>{
        return axios.put(`/books/markAsTaken/${id}`)
    }
}
export default LibraryService;