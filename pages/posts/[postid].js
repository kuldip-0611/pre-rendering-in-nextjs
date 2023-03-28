const Post = ({ post }) => {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <h3>{post.body}</h3>

        </>
    )



}
export default Post;
export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const paths = data.map(post=>{
        return {
            params: {
                postid: `${post.id}`,
            },
         
        }
    })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    const { params } = context
    console.log(params)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await response.json()
    return {
        props: {
            post: data
        }
    }

}
