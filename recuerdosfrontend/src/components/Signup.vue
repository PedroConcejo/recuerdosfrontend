<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="ma-2" outlined color="white" v-on="on">Signup</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Name*" v-model="username"
            prepend-icon="mdi-account-circle"
            :rules="userRules" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email*"  v-model="email"
            :rules="emailRules"
            prepend-icon="mdi-email" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*"  v-model="userPassword"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :rules="passwordRule"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  prepend-icon="mdi-map-marker"
                  :items="location"
                  name="category"
                  label="Select a category"
                  v-model="category"
                  v-validate="'required'"
                  item-text="name"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="signup">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import APIServices from '../services/Api'

export default {
  data () {
    return {
      userlocation: '',
      dialog: false,
      showPassword: false,
      userPassword: '',
      passwordRule: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters'
      ],
      username: '',
      userRules: [v => !!v || 'Username is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  props: {
    location: Array
  },
  methods: {
    signup () {
      const newUser = {
        name: this.username,
        email: this.email,
        password: this.userPassword,
        location: '5ea82ca9d8684d35fd02926a'
      }

      APIServices.signup(newUser)
        .then(response => {
          localStorage.setItem('token', response.token)
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}
</script>
