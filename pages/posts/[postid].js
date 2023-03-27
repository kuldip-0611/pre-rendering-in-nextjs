const Post = ({post})=>{
    return(
        <>
        <h2>{post.id} {post.title}</h2>
        <h3>{post.body}</h3>
       
        </>
    )



}
export default Post;
export async function getStaticProps(context) { 
    const {params} = context

    const response = await (`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await response.json()
    return {
        props: {
            post: data
        }
    }

}