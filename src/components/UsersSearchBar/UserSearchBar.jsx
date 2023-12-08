import React, { useState } from 'react'

function UserSearchBar({ onSearch }) {
    const [sector, setSector] = useState('')
    const [location, setLocation] = useState('')

    const handleSearch = () => {
        onSearch({ sector, location })
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar por sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
            />
            <input
                type="text"
                placeholder="Buscar por localización"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default UserSearchBar
