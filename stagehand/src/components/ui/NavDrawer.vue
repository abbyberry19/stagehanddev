<template>
      <v-navigation-drawer
        clipped
        expand-on-hover
        rail
        permanent 
        flat
      >
        <v-list>
            <v-list-avatar>"https://ui-avatars.com/api/?name=Example+Account"</v-list-avatar>
            <v-list-item-title>{{ user.nickname }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
        </v-list>

        <v-divider color="white"></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-variant" title="Dashboard" value="Dashboard" href="/dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-folder" title="Files" value="Files" href="/files"></v-list-item>
          <v-list-item prepend-icon="mdi-calendar-month" title="Calendar" value="Calendar" href="/calendar"></v-list-item>
          <v-list-item prepend-icon="mdi-cog" title="Settings" value="Settings" href="/settings"></v-list-item>
        </v-list>
      </v-navigation-drawer>
</template>

<script>
  import { useAuth0 } from '@auth0/auth0-vue';

  export default {
    setup() {
      const { loginWithRedirect, user, isAuthenticated } = useAuth0();

      return {
        login: () => {
          loginWithRedirect();
        },
        user,
        isAuthenticated
      };
    }
  };
</script>