<template>
  <div id="testimonial">
    <h1>Our Testimonials</h1>
    <div id="testimonialCard">
      <v-app>
        <v-container>
          <v-row justify="center">
            <v-col class="col-4">
              <v-card
                class="mx-lg-auto yellow lighten-1 pa-2"
                outlined>
                <div></div>
                <v-avatar color="grey" size="132">
                  <span class="white--text headline">132</span>
                </v-avatar>
                <v-card-text>
                  <p>Enock Khoromana</p>
                  <p>New Day Cleaning Ltd</p>
                  <p>Manchester</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col class="col-3">
              <v-card
                class="mx-lg-auto blue pa-2">
                <p class="yellow--text">lorem ipsum</p>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-app>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    cardName: String,
    cardCompany: String,
    cardLocation: String,
    cardInfo: String
  }
}
</script>

<style scoped>
  .maincard {
    border-style: solid;
    border-width: medium;
  }
</style>