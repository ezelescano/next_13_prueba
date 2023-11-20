import PostsPages from "../page";

const getPost = async (id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = res.json();
    return data;
}

const  PostPage = async ({params})=>{
    const postId = params?.id;
    const post = await getPost(postId);
    return(
        <div>
        <h1>Post Page {post.title}</h1>
        <p>{post.body}</p>

        <hr/>

        <h3>Otras Publicaciones </h3>
        <PostsPages/>
        
        </div>
    )
}
export default PostPage; 