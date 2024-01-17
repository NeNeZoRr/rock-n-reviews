import React, { useState } from "react"
import axios from "axios"

function ReplyForm({ threadId }) {
    const [content, setContent] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(`/api/threads/${threadId}/replies`, {
                content,
            })

            if (response.data.success) {
                alert("Reply posted successfully")
            } else {
                alert("An error occurred")
            }
        } catch (error) {
            console.error("Error posting reply:", error)
            alert("No Server 404")
        }
    }

    return (
        <div className="ReplyForm">
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Your Reply:</h3>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </label>
                <input type="submit" value="Post Reply" />
            </form>
        </div>
    )
}

export default ReplyForm