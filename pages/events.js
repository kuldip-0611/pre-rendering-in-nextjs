import { useRouter } from "next/router"
import { useState } from "react"

function show_events({ event_list }) {
    const [data,setData]= useState(event_list)
    const router = useRouter()
    const fetchSportsEvents = async ()=>{
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()

        setData(data)
        router.push('/events?category=sports',undefined,{shallow : true})



    }
    return (
        <>
        <button onClick={fetchSportsEvents}>sports Events</button>
            <h2>Event List</h2>
            {
                data.map(event => {
                    return (
                        <div key={event.id}>
                            <h3>{event.id}|{event.name} | {event.category}</h3>
                            <p>{event.description}</p>
                            
                        </div>
                    )
                })
            }
        </>
    )

}
export default show_events

export async function getServerSideProps(context) {
    const {query} = context
    const {category}= query
    const queryString = category ? 'category=sports' : "";
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    return {
        props: {
            event_list: data
        }
    }
}