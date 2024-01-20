import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReplyForm from './ReplyForm';

function CoverForum() {
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState({ title: '', body: '' });
    const [postResult, setPostResult] = useState({ success: null, message: '' });

    // Function to handle submission of a new topic
    const handleTopicSubmit = () => {
        if (newTopic.title.trim() && newTopic.body.trim()) {
            setTopics([...topics, { ...newTopic, replies: [] }]);
            setNewTopic({ title: '', body: '' });
            setPostResult({ success: true, message: 'Topic posted successfully!' });
        } else {
            setPostResult({ success: false, message: 'Please provide both title and body for the topic.' });
        }
    };

    // Function to handle submission of a reply to a topic
    const handleReplySubmit = (topicIndex, replyContent) => {
        const updatedTopics = [...topics];
        updatedTopics[topicIndex].replies.push(replyContent);
        setTopics(updatedTopics);
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Forum</h1>
            {postResult.message && (
                <div style={{ color: postResult.success ? 'green' : 'red', margin: '10px 0' }}>{postResult.message}</div>
            )}
            <div>
                <h2>Topics </h2>
                <div style={{ marginBottom: '30px' }}></div>
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
                        <Form.Label>
                            <h3>Title:</h3>
                        </Form.Label>
                        <Form.Control
                            type="text"
                            value={newTopic.title}
                            onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                            placeholder="Add a new topic title"
                            style={{ border: '2px solid black' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            <h3>Body:</h3>{' '}
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={newTopic.body}
                            onChange={(e) => setNewTopic({ ...newTopic, body: e.target.value })}
                            placeholder="Add topic details"
                            style={{ border: '2px solid black' }}
                        />
                    </Form.Group>
                </Form>
            </div>
            <Button variant="primary" onClick={handleTopicSubmit}>
                {postResult.success ? 'Topic posted successfully!' : 'Post Topic'}
            </Button>
        </div>
    );
}

export default CoverForum;
