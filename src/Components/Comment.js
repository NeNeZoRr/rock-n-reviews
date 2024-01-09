import React from 'react'

const Comment = ({author,text}) => (
<div>
    <strong>{author}:</strong> {text}
</div>
)

export default Comment