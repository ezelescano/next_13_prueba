import PostCard from "../components/PostCard";

const loadPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
}

const PostPages = async () => {

    const posts = await loadPosts();
    console.log(posts);

    return (

        <div>
            <h1>Soy el Post</h1>
            {posts.map((post) =>(
               <PostCard post={post}/>
            )) }

            
        </div>

    )

}

export default PostPages;