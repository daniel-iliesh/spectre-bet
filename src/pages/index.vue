<template>
  <v-container class="mt-4">
    <v-row>
      <v-col>
        <h1 class="text-h5 font-weight-bold">Events</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="text-h6 font-weight-bold text-grey">July 9, 2025</v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text class="d-flex flex-column">
            <span>
              <v-chip variant="tonal" color="primary">FOOTBALL</v-chip>
            </span>
            <span class="text-h6 font-weight-bold">⚽ Club World Cup</span>
            <span class="text-subtitle-1 text-grey">22:00</span>
            <v-row>
              <v-col cols="6">
                <v-card
                  variant="tonal"
                  color="primary"
                  style="border: 1px solid #bbdefb"
                  class="d-flex flex-column align-center py-4 ga-4"
                >
                  <v-img
                    width="30px"
                    src="https://ssl.gstatic.com/onebox/media/sports/logos/mcpMspef1hwHwi9qrfp4YQ_64x64.png"
                  />
                  <span class="font-weight-bold">Paris Saint-Germain</span>
                  <span class="text-primary text-h6 font-weight-bold">
                    1.46
                  </span>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card
                  variant="tonal"
                  color="primary"
                  style="border: 1px solid #bbdefb"
                  class="d-flex flex-column align-center py-4 ga-4"
                >
                  <v-img
                    width="30px"
                    src="https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_64x64.png"
                  />
                  <span class="font-weight-bold">Real Madrid</span>
                  <span class="text-primary text-h6 font-weight-bold"
                    >1.73</span
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>
