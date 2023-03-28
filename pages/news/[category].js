const category_news = ({ articals }) => {
    return (
        <>
            <h1>Category wise news is</h1>
            {
                articals.map((artical) => {
                    return (
                        <div key={artical.id}>
                            <h3>{artical.id}</h3>
                            <h2>{artical.title}</h2>
                            <p>{artical.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default category_news;

export async function getServerSideProps(context) {
    const { query , req,res} = context
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie', ['name=kuldip'])
    const { category } = query
    console.log(category);
    const response = await fetch(`http://localhost:4000/news?category=${category}`);
    const data = await response.json();
    console.log(data);

    return {
        props: {
            articals: data,
            category
        }
    }
}