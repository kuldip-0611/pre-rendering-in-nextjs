import User from "@/components/user";

const Users = ({users})=>{
    return (
        <>
            <h1>users List Is</h1>
            {
                users.map(user=>{
                    return ( <User user={user} />)
                })
            }
        </>
    )
}
export default Users;

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return {
        props:{
            users:data
        }
    }

} 