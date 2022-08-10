

export function setUsuarios(state, usuarios){
    state.usuarios = usuarios;
}

export function setUsuario(state, usuario){
    state.selectUsuario=usuario
}

export function usuarioError(state, payload){
    state.error=true
    state.errorMessage-=payload
}

export function usuarioAdd(state, usuario){
    state.usuarioAdd=usuario
}