import React from "react";
import {Link} from 'react-router-dom'

const BookTerm = (props) => {
    return (
        <tr>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name}</td>
            <td scope={"col"}>{props.term.copies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info m-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>Edit</Link>
                <a title={"MarkAsTaken"} className={"btn btn-danger"}
                   onClick={() => props.onMarkAsTaken(props.term.id)}>
                    Mark as Taken
                </a>
            </td>
        </tr>
    )
}
export default BookTerm;