import { FaTimes} from 'react-icons/fa'

const Entry = ( {entry, onDelete} ) => {
    let list_element = entry.name + "\t" + entry.age + "\t" + entry.gift


    return (
        <div className="entry">
            <h3>{entry.name} 
                <FaTimes style={{cursor: 'pointer' }} 
                onClick={() => onDelete(entry.id)}/>
            </h3>
            <p>Requested Toy: {entry.gift}</p>
        </div>
    )

}

export default Entry