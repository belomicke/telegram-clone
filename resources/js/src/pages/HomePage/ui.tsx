export const HomePage = () => {
    return (
        <div onClick={() => axios.get('http://localhost/api/auth/viewer')}>click</div>
    )
}
