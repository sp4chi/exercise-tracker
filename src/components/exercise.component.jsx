import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Exercise(props) {
    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
            </td>
        </tr>
    )
}

Exercise.propTypes = {
    exercise: PropTypes.object,
    username: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.number,
    date: PropTypes.object,
    _id: PropTypes.string,
    deleteExercise: PropTypes.func
}

export default Exercise;