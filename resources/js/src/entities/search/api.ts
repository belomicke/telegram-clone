import axios from 'axios'

const searchUsers = async (query: string) => {
    return await axios.get('http://localhost/api/search', { params: { query } })
}

export const searchApi = {
    searchUsers
}
