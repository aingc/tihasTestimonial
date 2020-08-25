<template>
  <div id="testimonial">
    <div id="testimonialCard">
      <v-app>
        <v-container>
          <v-sheet class="mx-auto">
            <v-row justify="center">
              <v-col class="col-4">
                <v-expand-transition>
                  <v-sheet
                    v-if="currentTestimonial != null"
                  >
                    <v-card
                      class="mx-lg-auto yellow lighten-1 pa-2"
                      outlined
                    >
                      <div></div>
                      <v-avatar color="grey" size="132">
                        <span class="white--text headline">{{testimonialList[currentTestimonial].id}}</span>
                      </v-avatar>
                      <v-card-text class="blue--text">
                        <p>{{testimonialList[currentTestimonial].name}}</p>
                        <p>{{testimonialList[currentTestimonial].company}}</p>
                        <p>{{testimonialList[currentTestimonial].location}}</p>
                      </v-card-text>
                    </v-card>
                  </v-sheet>
                </v-expand-transition>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="col-2">
                <v-slide-group
                  class="pa-4"
                  v-model="currentTestimonial"
                  mandatory
                >
                  <v-slide-item
                    v-bind:key="testimonial.id"
                    v-for="testimonial in testimonialList"
                    v-slot:default="{ active, toggle }"
                  >
                    <v-row>
                      <v-col>
                        <v-avatar
                          :size="24"
                          :color="active ? '#2A4898' : '#FCE700'"
                          @click="toggle"
                        >
                        </v-avatar>
                      </v-col>
                    </v-row>
                  </v-slide-item>
                </v-slide-group>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col class="col-3">
                <v-sheet
                  v-if="currentTestimonial != null"
                >
                  <v-card
                    class="mx-lg-auto pa-2"
                    style="background:#2A4898"
                  >
                    <p class="pText">{{testimonialList[currentTestimonial].info}}</p>
                  </v-card>
                </v-sheet>
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: ['testimonialList'],
  data: () => {
    return {
      currentTestimonial: null
    }
  }
}
</script>

<style scoped>
  .maincard {
    border-style: solid;
    border-width: medium;
  }
  .pText {
    color: #FCE700;
  }
</style>