import axios from "axios"

export async function fetchAlumnos({commit}){
    try {
        const{data}=await axios({
            url:'/user'
        })
        console.log(data, " user")
        commit('setUsuarios', data)
    } catch (error) {
        commit('usuarioError',e)
    }
    finally{
        console.log('peticion terminada');
    }
}

export async function AddUsuario({ commit }, cliente) {
    await axios
      .post("/user", cliente)
      .then((respuesta) => {
        commit("usuarioAdd", respuesta);
      })
      .catch((error) => {
        commit("UsuarioError", error);
      });
  }