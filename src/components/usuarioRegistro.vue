<template>
  <v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-card>
        <v-card-text>
          <v-form ref="formAdd">
            <center>
              <h1>Registrarse</h1>
              <br />
            </center>
            <v-text-field ref="nombre" value="" v-model="editedItem.nombre" :rules="rulesNombre"
              :error-messages="errorMessages" label="Nombre Usuario" persistent-hint outlined
            ></v-text-field>
            <v-text-field persistent-hint outlined ref="email" v-model="editedItem.email"
              :rules="rulesEmail" label="E-mail" required
            ></v-text-field>
            <v-text-field
              persistent-hint outlined v-model="editedItem.password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rulesPass" :type="show1 ? 'text' : 'password'" name="password" value="" label="Contraseña"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-text-field
              persistent-hint outlined v-model="editedItem.verificarC" :rules="rulesPassC" :type="show1 ? 'text' : 'password'"
              name="verificarC" label="Confirmar Contraseña" value=""
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn class="mr-4" color="primary" text @click="save()"> REGISTRARME </v-btn>
          <v-btn text @click="inicio()">REGESAR AL INICIO</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
//import axios from "axios"
import { mapActions, mapGetters, mapState } from "vuex";
import Swal from "sweetalert2";
import { AddUsuario } from "../modulos/usuarios/action";

export default {
  data() {
    return {
      //Declarar arreglo de documento Json
      usuario: [],
      editedItem: {
        nombre: "",
        email: "",
        password: "",
        verificarC: "",
      },
      errorMessages: "",
      //Variables de visualizacion de contraseñas
      show1: false,
      show2: false,
      //Validaciones de formulario
      rulesNombre: [
        (value) => !!value || "Campo Necesario",
        (v) => v.length > 3 || "Min 4 caracteres",
      ],
      rulesEmail: [
        (value) => !!value || "Campo Necesario",
        (v) =>
          /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || "E-mail no es valido",
      ],
      rulesPass: [
        (value) => !!value || "Campo Necesario",
        (v) => v.length > 7 || "Min 8 caracteres",
      ],
      rulesPassC: [
        (value) => !!value || "Campo Necesario",
        //(valu) => valu.password === valu.verificarC || "Contraseña no es igual", 
        (v) => v.length > 7 || "Min 8 caracteres",
      ],
    };
  },

  computed: {
    form() {
      return {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        verificarC: this.verificarC,
      };
    },
    ...mapState("usuarios", ["status", "errorMessage"]),
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    ...mapActions("usuarios", ["AddUsuario"]),
    inicio(){
        this.$router.push('/Login');
      },
    save() {
      // se valida si el formulario esta bien
      if (this.$refs.formAdd.validate()) {
        // se manda el modelo
        if(this.editedItem.password === this.editedItem.verificarC)
        {
        this.AddUsuario(this.editedItem).then((respuesta) => {
          if (!this.status) {
            this.$router.push('/Login');
            Swal.fire({
              icon: "success",
              title: "Usuario registrado",
              showConfirmButton: true,
              // timer: 1500
            });
          } else {
            Swal.fire({
              type: "error",
              title: "Oops...",
              text: this.errorMessage,
            });
          }
        });}
        else{
          Swal.fire({
              type: "error",
              title: "Oops...",
              text: "La contraseña no coinciden",
            });
        }
      } else {
        this.validationError();
      }
    },
    // metodo para mandar error en el formulario
    validationError() {
      Swal.fire({
        icon: "warning",
        title: "Hay campos vacios",
        text: "Revisa que todos los campos tenga la informacion correspondiente",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
      });
    },
  },
};
</script>