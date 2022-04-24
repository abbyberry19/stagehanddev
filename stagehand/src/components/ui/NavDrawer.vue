<template>
      <v-navigation-drawer
        clipped
        expand-on-hover
        rail
        permanent 
        flat
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://ui-avatars.com/api/?name=Example+Account"
            title="Name"
            subtitle="Account Email"
          ></v-list-item>
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
  export default {
    //
  }
</script>