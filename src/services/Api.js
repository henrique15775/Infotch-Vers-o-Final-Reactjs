const api = "https://produtos-json-server.christophersil5.repl.co"

async function readAll(name){
    const res = await fetch(`${api}/${name}`)
    const data = await res.json()
    return data
}

async function create(produto){
    const res = await fetch(`${api}/computadores)`,{
        method: "post",
        body: JSON.stringify(produto),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    return await res.json()
}

export default {readAll, create};