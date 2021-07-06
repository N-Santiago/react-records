export const addAlbum = (album, categoryId, history) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/categories/${categoryId}/albums`, {
            method: 'POST',
            headers: {
                // 'Content-Type': 'application/json',
                // 'Accept': 'application/json'
            },
            body: album
        })
        .then(res => res.json())
        .then((category) => {
            // getImageFromBackEnd()
            dispatch({ type: "CREATE_ALBUM", payload: category })
            history.push(`${categoryId}/albums`)
        })
        .catch((err) => dispatch({ type: "ERROR", payload: "" }))
    }
}

// function getImageFromBackEnd(url, div){
//     fetch(`http://localhost:3000/${url}`)
//     .then(resp => resp.blob())
//     .then(blob => {
//         const img  = document.createElement("img")
//         img.src = URL.createObjectURL(blob)
//         div.insertAdjacentElement('afterbegin', img) //insert the img as the first child inside the post body - check out insertAdjacentElement here https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
//     })
// }