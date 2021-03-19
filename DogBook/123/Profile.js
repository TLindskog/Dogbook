import { useContext } from "react"
import Dog from "./Dog"
import {DogContext} from './DogContext'


const Profile = () => {
    const [dogs, setDogs] = useContext(DogContext)

    const togglePresent = (id) => {
        const updatedPresent = [...dogs].map((dog) => {
            if(dog.id === id){
                dog.present = !dog.present
            }
            return dog
        })
        setDogs(updatedPresent)
    }

    const getTextDecor =(present) => {
        return ( present? 'line-through': 'red')
    }

    return (
        <>
         <div>
            <h3>DogProfile</h3>
            {dogs.map(dog => (
                <>
                <text>________________________</text><br/><br/>
                <text>- Name: </text>
                    <Dog name={dog.name} key={dog.nameId}/><br/>
                <text>- Nick: </text>
                    <Dog nick={dog.nick} key={dog.nickId}/><br/>
                <text>- Age: </text>
                    <Dog age={dog.age} key={dog.ageId}/><br/>
                <text>- Bio: </text>
                    <Dog bio={dog.bio} key={dog.bioId}/><br/>
                <text>- Friends: </text>
                    <Dog friends={dog.friends} key={dog.friendsId}/><br/>
                
                <text>- Present</text>
                    <input type="checkbox" 
                    id="present"
                    checked={dog.present}
                    onChange={() => togglePresent(dog.id)}
                    /><br/>
                </>
            ))}
            
        </div>
        </>
    )
}
export default Profile;
