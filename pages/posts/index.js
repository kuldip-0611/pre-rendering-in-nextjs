import Link from 'next/link'
const postList = ({ posts }) => {
    return(
        <>
            <h1>List of Posts</h1>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        {console.log(post.id)}
                        <Link href={`/posts/${post.id}`} ><h2>{post.id} {post.title}</h2></Link>
                    </div>
                ))
            }
        </>
    )


}

export default postList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return {
        props: {
            posts: data,
        }
    }
}