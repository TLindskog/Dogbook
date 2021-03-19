import { useContext, useState } from "react"
import Dog from "./Dog"
import {DogContext} from './DogContext'

const Edit = () => {
    const [dogs, setDogs] = useContext(DogContext)
    const [dogsEditing, setDogsEditing] = useState(null)
    const [editingText, setEditingText] = useState ('')

    const [dogsNickEditing, setDogsNickEditing] = useState(null)
    const [editingNickText, setEditingNickText] = useState ('')

    const [dogsAgeEditing, setDogsAgeEditing] = useState(null)
    const [editingAgeText, setEditingAgeText] = useState ('')

    const [dogsBioEditing, setDogsBioEditing] = useState(null)
    const [editingBioText, setEditingBioText] = useState ('')

    const [dogsFriendsEditing, setDogsFriendsEditing] = useState(null)
    const [editingFriendsText, setEditingFriendsText] = useState ('')

    const editDog = (id) => {
        const updatedDog = [...dogs].map((dog) => {
            if(dog.id === id){
                dog.name = editingText
            }
            return dog
        })
        setDogs(updatedDog)
        setDogsEditing(null)
        setEditingText('')
    }
    const editDogNick = (id) => {
        const updatedDogNick = [...dogs].map((dogNick) => {
            if(dogNick.id === id){
                dogNick.nick = editingNickText
            }
            return dogNick
        })
        setDogs(updatedDogNick)
        setDogsNickEditing(null)
        setEditingNickText('')
    }
    const editDogAge = (id) => {
        const updatedDogAge = [...dogs].map((dogAge) => {
            if(dogAge.id === id){
                dogAge.age = editingAgeText
            }
            return dogAge
        })
        setDogs(updatedDogAge)
        setDogsAgeEditing(null)
        setEditingAgeText('')
    }
    const editDogBio = (id) => {
        const updatedDogBio = [...dogs].map((dogBio) => {
            if(dogBio.id === id){
                dogBio.bio = editingBioText
            }
            return dogBio
        })
        setDogs(updatedDogBio)
        setDogsBioEditing(null)
        setEditingBioText('')
    }
    const editDogFriends = (id) => {
        const updatedDogFriends = [...dogs].map((dogFriends) => {
            if(dogFriends.id === id){
                dogFriends.friends = editingFriendsText
            }
            return dogFriends
        })
        setDogs(updatedDogFriends)
        setDogsFriendsEditing(null)
        setEditingFriendsText('')
    }

    return (
        <>
         <div>
            <h3>DogEditor</h3>
            {dogs.map(dog => (
                <>
                    <text>________________________</text><br/><br/>
                        - <Dog nick={dog.nick} key={dog.id}/> -<br/>
                        <text>Name: </text>
                        <input type="text" 
                            onChange={(e) => setEditingText(e.target.value)} 
                            value={editingText}
                            placeholder="Type new name here..."
                        />
                        
                        <button onClick={() => editDog(dog.id)}>Save</button><br/>


                        <text>Nick: </text>
                        <input type="text" 
                            onChange={(e) => setEditingNickText(e.target.value)} 
                            value={editingNickText}
                            placeholder="Type new nick here..."
                        />
                        
                        <button onClick={() => editDogNick(dog.id)}>Save</button><br/>

                        <text>Age: </text>
                            <select name="age" onChange={(e) => setEditingAgeText(e.target.value)} 
                                value={editingAgeText} defaultValue="Select new age">
                                <option defaultValue>Select new age</option>
                                <option value="0-1 Years">{"<"}1</option>
                                <option value="1 Years">1</option>
                                <option value="2 Years">2</option>
                                <option value="3 Years">3</option>
                                <option value="4 Years">4</option>
                                <option value="5 Years">5</option>
                                <option value="6 Years">6</option>
                                <option value="7 Years">7</option>
                                <option value="8 Years">8</option>
                                <option value="9 Years">9</option>
                                <option value="10 Years">10</option>
                                <option value="10+ Years">10{">"}</option>
                            </select>
                                                
                        <button onClick={() => editDogAge(dog.id)}>Save</button><br/>

                        <text>Bio: </text>
                        <input type="text" 
                            onChange={(e) => setEditingBioText(e.target.value)} 
                            value={editingBioText}
                            placeholder="Type new bio here..."
                        />
                        
                        <button onClick={() => editDogBio(dog.id)}>Save</button><br/>

                        <text>Friends: </text>
                        <select name="friends" onChange={(e) => setEditingFriendsText(e.target.value)} 
                            value={editingFriendsText} defaultValue="Select Friends">
                            <option defaultValue>Select Friend</option>
                            {dogs.map((dog) => (
                                <option value={dog.nick}>{dog.nick}</option>
                            ))}
                        </select>
                        <button onClick={() => editDogFriends(dog.id)}>Save</button><br/>

                </>
            ))}
            
        </div>
        </>
    )
}

export default Edit;