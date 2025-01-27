import { useGlobalContext } from '../contexts/GlobalContext'

const PostCard = () => {

    const { post } = useGlobalContext();

    return (
        <div className="container">
            {post.map(post => (
                <div key={post.id} className="card mx-auto my-3">
                    <img src={post.image} className="card-img-top" alt={post.name} />
                    <div className="card-body">
                        <h5 className="card-title">{post.name}</h5>
                        <p className="card-text">{post.description}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default PostCard