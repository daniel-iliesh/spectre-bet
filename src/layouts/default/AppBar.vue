<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <div class="d-flex justify-space-between w-100">
        <v-avatar v-if="user?.photo_url" :image="user?.photo_url"></v-avatar>
        <v-avatar v-else class="pa-2">
          <span class="text-h6">
            {{
              user?.first_name?.charAt(0) ||
              "J" + user?.last_name?.charAt(0) ||
              "D"
            }}
          </span>
          <!-- <v-img :src="fakeUser.photo_url" /> -->
        </v-avatar>
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
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  allows_write_to_pm: boolean;
  photo_url: string;
}

const user = ref<UserData | null>();

onMounted(() => {
  user.value = WebApp.initDataUnsafe.user as UserData;
});
</script>
