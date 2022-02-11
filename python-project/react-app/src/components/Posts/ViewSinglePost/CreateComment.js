import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as commentActions from '../../../store/comments'

const CreateComment = ({ post, setUpdate }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`/api/comments/posts/${post.id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({
                comment,
                edited: false
            })
        })

        if (res.ok) {
            const data = await res.json()
            dispatch(commentActions.getAllComments(post.id))
            setComment("")
            setUpdate(true)
            return data
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="comment"
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">Post</button>
            </form>
        </>
    )
}

export default CreateComment
