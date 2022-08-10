<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
            <center>
              <h1>Recuperar Contraseña</h1>
              <br>
          </center>
          <v-text-field
            solo
            ref="email"
            v-model="email"
            :rules="[
              () => !!email || 'Campo necesario',
              () => /.+@.+\..+/.test(email) || 'E-mail debe de ser valido',
            ]"
            label="E-mail"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn
            class="mr-4"
            color="primary"
            text
            @click="submit"
          >
            ENVIAR
          </v-btn>
        </v-card-actions>
        <center>
        <v-btn text @click="inicio()">REGESAR AL INICIO</v-btn>
        </center>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    data: () => ({
      errorMessages: '',
      email: null,
    }),

    computed: {
      form () {
        return {
          email: this.email,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
       inicio(){
        this.$router.push('/Login');
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    },
  }
</script>