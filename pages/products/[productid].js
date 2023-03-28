const Post = ({ post }) => {

    return (
        <>
            <h2>{post.id} {post.name}</h2>
            <h3>{post.price}</h3>

        </>
    )



}
export default Post;

export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products');
    const data = await response.json();
    const paths = data.map(post => ({
        params: { productid: `${post.id}` }
    }))
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    console.log('regenerate individual products')
    const { params } = context

    const response = await fetch(`http://localhost:4000/products/${params.productid}`)
    const data = await response.json()
    return {
        props: {
            post: data
        },
        revalidate: 10
    }

}