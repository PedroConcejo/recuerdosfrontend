<template>
  <div class="home">
    <Navbar />
    <v-row>
     <v-col  offset="3" class="d-flex" cols="12" sm="6">
        <v-select
          :items="categories"
          label="Tipo de Sesion"
          solo
        ></v-select> <v-select
          :items="location"
          label="Ubicacion"
          solo
        ></v-select>
         <v-btn class="ma-2" outlined color="black">Buscar</v-btn>
      </v-col>
    </v-row>
    {{ partners }}
  </div>
</template>

<script>
import APIServices from '../services/Api'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  date () {
    return {
      location: '',
      categories: '',
      partners: ''
    }
  },
  components: {
    Navbar
  },
  mounted () {
    APIServices.getAllLocations().then(res => (this.location = res))
    APIServices.getAllCategories().then(res => (this.categories = res))
    APIServices.getAllPartners().then(res => (this.partners = res))
  }
}
</script>
