<template>
  <div id="testimonial">
    <h1>Our Testimonials</h1>
    <div id="testimonialCard">
      <v-app>
        <v-container>
          <v-carousel
            light
            hide-delimiter-background=""
            :continuous="true"
            :show-arrows="false"
            delimiter-icon="mdi-minus"
            >
            <v-carousel-item
              v-bind:key="testimonial.id" v-for="testimonial in testimonialList"
              >
              <v-row justify="center">
                <v-col class="col-4">
                  <v-card
                    class="mx-lg-auto yellow lighten-1 pa-2"
                    outlined>
                    <div></div>
                    <v-avatar color="grey" size="132">
                      <span class="white--text headline">{{testimonial.id}}</span>
                    </v-avatar>
                    <v-card-text class="blue--text">
                      <p>{{testimonial.name}}</p>
                      <p>{{testimonial.company}}</p>
                      <p>{{testimonial.location}}</p>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col class="col-3">
                  <v-card
                    class="mx-lg-auto blue pa-2">
                    <p class="yellow--text">{{testimonial.info}}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-carousel-item>
          </v-carousel>
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: ['testimonialList']
}
</script>

<style scoped>
  .maincard {
    border-style: solid;
    border-width: medium;
  }
</style>