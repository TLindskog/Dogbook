import { useContext } from "react"
import Dog from './Dog'
import {DogContext} from './DogContext'

const Home = () => {
    const [dogs, setDogs] = useContext(DogContext)

    const handleDelete = (id) => {
        const newDogs=dogs.filter(Dog => Dog.id !==id)
        setDogs(newDogs)
    }

    return (
        <>
        <div>
            <h2>DogBook</h2>
            <p>Amount of Dogs in total: {dogs.length}</p>
                {dogs.map(dogHome => (
                    <>
                    <Dog nick={dogHome.nick} key={dogHome.id}/>
                    <button onClick ={() => handleDelete(dogHome.id)}>X</button><br/>
                    </>
                ))}
        </div>  
        </>
    )
}

export default Home;