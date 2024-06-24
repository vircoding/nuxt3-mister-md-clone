<script setup>
  const props = defineProps({
    players: {
      type: Array,
      required: true,
    },
  });
</script>

<template>
  <ul>
    <li v-for="(player, index) in players" :key="player.uid">
      <!-- Original One -->
      <!-- <TablePlayerItem :player="player" :position="index + 1" /> -->

      <!-- Avoid Accent Text (IsUser prop)-->
      <TablePlayerItem :player="player" :position="index + 1" :is-user="!index" />
    </li>
  </ul>
</template>
