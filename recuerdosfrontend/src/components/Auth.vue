<template>
  <div class="home">
    <Navbar :location="location" />
    <v-row>
     <v-col  offset="3" class="d-flex" cols="12" sm="6">
       <v-select
          prepend-icon="mdi-map-marker"
                  :items="category"
                  name="category"
                  label="Select a Category"
                  v-model="category"
                  v-validate="'required'"
                  item-text="name"
        ></v-select>
        <v-select
          prepend-icon="mdi-map-marker"
                  :items="location"
                  name="category"
                  label="Select a Location"
                  v-model="category"
                  v-validate="'required'"
                  item-text="name"
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
