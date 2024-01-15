import React, { useState } from 'react'
import CommentForm from './CommentForm'
import ReplyForm from './ReplyForm'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CoverForum = () => {
    const [topics, setTopics] = useState([])
    const [newTopic, setNewTopic] = useState({ title: '', body: '' })
    const [postResult, setPostResult] = useState({ success: null, message: '' })

    const handleTopicSubmit = () => {
        if (newTopic.title.trim() && newTopic.body.trim()) {
            setTopics([...topics, { ...newTopic, replies: [] }])
            setNewTopic({ title: '', body: '' })
            setPostResult({ success: true, message: 'Topic posted successfully!' })
        } else {
            setPostResult({ success: false, message: 'Please provide both title and body for the topic.' })
        }
    }

    const handleReplySubmit = (topicIndex, replyContent) => {
        const updatedTopics = [...topics];
        updatedTopics[topicIndex].replies.push(replyContent)
        setTopics(updatedTopics);
    }

    const clearPostResult = () => {
        setPostResult({ success: null, message: '' })
    }

    return (
        <div>
            <h1>Cover Forum</h1>
            {postResult.message && (
                <div style={{ color: postResult.success ? 'green' : 'red', margin: '10px 0' }}>{postResult.message}</div>
            )}
            <div>
                <h2>Topics</h2>
                <Accordion>
                    {topics.map((topic, index) => (
                        <Accordion.Item key={index} eventKey={`accordion-${index}`}>
                            <Accordion.Header>{topic.title}</Accordion.Header>
                            <Accordion.Body>
                                <Card.Text>{topic.body}</Card.Text>
                                <div>
                                    <h4>Replies:</h4>
                                    {topic.replies.map((reply, replyIndex) => (
                                        <div key={replyIndex}>
                                            <Card.Text>{reply}</Card.Text>
                                        </div>
                                    ))}
                                    <ReplyForm threadId={index} onReplySubmit={(replyContent) => handleReplySubmit(index, replyContent)} />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control
                            type="text"
                            value={newTopic.title}
                            onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                            placeholder="Add a new topic title"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Body:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newTopic.body}
                            onChange={(e) => setNewTopic({ ...newTopic, body: e.target.value })}
                            placeholder="Add a new topic body"
                        />
                    </Form.Group>
                </Form>
            </div>
            <button onClick={handleTopicSubmit}>Post Topic</button>
            <button onClick={clearPostResult}>Clear Result</button>
        </div>
    )
}

export default CoverForum