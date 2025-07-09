<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="d-flex justify-space-between w-100">
        <v-avatar class="pa-2">
          <span class="text-h6">
            {{
              user?.firstName?.charAt(0) ||
              "J" + user?.lastName?.charAt(0) ||
              "D"
            }}
          </span>
          <!-- <v-img :src="fakeUser.photo_url" /> -->
        </v-avatar>
        <span v-if="user">Welcome, {{ user.firstName }}!</span>
        <v-btn class="mr-6 bg-white"> 0 USD </v-btn>
      </div>
    </v-app-bar-title>
  </v-app-bar>
</template>

<script lang="ts" setup>
import WebApp from "@twa-dev/sdk";
import { onMounted, ref } from "vue";

interface UserData {
  id: number;
  firstName?: string;
  lastName?: string;
  username?: string;
  photo_url?: string;
}

const user = ref<UserData | null>(null);

onMounted(() => {
  user.value = WebApp.initDataUnsafe.user as UserData;
});
</script>
