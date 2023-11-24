'use strict'

async function listarUsuarios () {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

//Cadastrando um novo Usuario

async function cadastrarUsuario (usuario) {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response.ok
}

//Atualizando um usuario ja cadastrado atravez do ID

async function atualizarUsuario (usuario){
    const url = `http://10.107.140.2:8080/usuarios/${usuario.id}`
    const options = {
        method : 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch (url, options)
    console.log (response.ok)
    return response.ok

}

//Deletando um usuario


    async function deletarUsuario (id){
        const url = `http://10.107.140.2:8080/usuarios/${id}`
        const options = {
            method : 'DELETE',
    } 
    const response = await fetch (url, options)
    console.log (response.ok)
    return response.ok
}





/*const usuarioAtualizado = {
    id: '55',
    nome: 'Kelvinn',
    email: 'K11camargoooo@gmail.com'

}

// Cadastrando um novo usuario

    const novoUsuario = {
    nome: 'Kelvinnnn',
    email: 'Kelvinnnnnnnnnnnnnn@gmail.com'
}

//atualizarUsuario (usuarioAtualizado)

//listarUsuarios()


//deletarUsuario(20)
*/