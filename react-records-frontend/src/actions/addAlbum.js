export const addAlbum = (album, categoryId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/categories/${categoryId}/albums`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({album})
        })
        .then(res => res.json())
        .then((category) => {
            dispatch({ type: "CREATE_ALBUM", payload: category })
            history.push('/albums')
        })
        .catch((err) => dispatch({ type: "ERROR", payload: "" }))
    }
}