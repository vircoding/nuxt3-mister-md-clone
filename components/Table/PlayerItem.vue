<script setup>
  const props = defineProps({
    player: {
      type: Object,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    isUser: {
      type: Boolean,
      required: true,
    },
  });

  const { formatBalance } = useUtils();
</script>

<template>
  <NuxtLink :to="`users/${player.uid}`" class="p-3 flex items-center">
    <!-- Position -->
    <span class="mr-[18px] text-[13px] text-secondary font-bold">{{ position }}</span>

    <!-- Avatar -->
    <div class="ml-3 w-[42px] h-[42px]">
      <InterfaceUserAvatar />
    </div>

    <!-- Info -->
    <div class="ml-2 grow flex flex-col">
      <span class="text-[15px] font-bold" :class="isUser ? 'text-accent' : 'text-black'">{{
        player.username
      }}</span>
      <span class="text-secondary text-xs font-bold tracking-tight"
        >{{ player.playersCount }} jugadores · {{ formatBalance(player.value) }}</span
      >
    </div>

    <!-- Points -->
    <div>
      <span class="text-[15px] font-bold mr-[2px] tracking-[-0.07em] text-black">{{
        player.points
      }}</span>
      <span class="text-[10px] font-bold tracking-tight">PTS</span>
    </div>
  </NuxtLink>
</template>
