import {useNavigate} from "react-router-dom"
import React from "react";


const BookAdd = (props) => {
    const navigate = useNavigate()
    const [formData,updateFormData] = React.useState({
        name: "",
        category: 0,
        author: 0,
        copies: 0
    })
    const handleChange = (e)=> {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name ;
        const category = formData.category ;
        const author = formData.author ;
        const copies = formData.copies;
        props.onBookAdd(name,category,author,copies);
        navigate("/books");

    }
    return(

        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                return <option value={term.id}>{term.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="copies">Available copies</label>
                        <input type="number"
                               className="form-control"
                               id="copies"
                               name="copies"
                               required
                               placeholder="Enter how many copies"
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}
export  default BookAdd;