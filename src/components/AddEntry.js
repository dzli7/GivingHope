import { useState } from 'react'

const AddEntry = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gift, setGift] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add an entry')
      return
    }

    onAdd({ name, age, gift })

    setName('')
    setAge('')
    setGift('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input
          type='text'
          placeholder='Add Age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Gift</label>
        <input
          type='text'
          placeholder='Add Gift'
          value={gift}
          onChange={(e) => setGift(e.target.value)}
        />
      </div>
      

      <input type='submit' value='Save Entry' className='btn btn-block' />
    </form>
  )
}

export default AddEntry