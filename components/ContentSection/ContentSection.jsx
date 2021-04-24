import {Context} from '../useContext/context.js'
import {useContext} from 'react'

import Post from '../Post/Post.jsx'

const ContentSection = () => {
    let {posts} = useContext(Context);

    return (
        <section className="content__section">
            <h1>New Posts</h1>
            {posts.map(post => {return <Post post={post} key={post.id} />})}
        </section>
    )
}

export default ContentSection;