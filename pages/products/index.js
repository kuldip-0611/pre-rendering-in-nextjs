
const Products = ({ products }) => {
    return (
        <>
            <h1>Products</h1>
            {
                products.map((product) => {
                    return (
                        <>
                            <h1> {product.name}</h1>
                            <h2>{product.price}</h2>
                            <h3>{product.id}</h3>
                        </>
                    )
                })
            }
        </>
    )
}
export default Products

export async function getStaticProps() {
    console.log('generating or regenerating Product_Listpage');
    const response = await fetch("http://localhost:4000/products");
    const data = await response.json();

    return {
        props: {
            products: data
        },
        revalidate: 10
    }
}
