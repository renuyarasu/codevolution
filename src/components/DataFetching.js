import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setID] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])
    return (
        <div>
            <input type="text" value={id} onChange={e => setID(e.target.value)} />
            <h1>{post.title}</h1>
        </div>
    )
}

export default DataFetching
