
const getPost = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json();
    return data;
}

const  PostPage = async ({params})=>{
        const post = await getPost(params.id)
    return(
        <div>
        <h1>Post Page {post.title}</h1>
        <p>{post.body}</p>
        </div>
    )
}
export default PostPage; 