<script setup>
  const [isGeneral, toggle] = useToggle();
</script>

<template>
  <div
    class="mx-[129px] my-[24px] text-sm font-semibold border max-w-[90%] bg-tertiary border-tertiary overflow-hidden rounded-full"
  >
    <button
      @click.prevent="toggle(true)"
      class="h-[38px] w-[158px] rounded-full overflow-hidden hover:underline"
      :class="isGeneral ? 'text-black bg-white' : 'text-secondary'"
    >
      General
    </button>
    <button
      @click.prevent="toggle(false)"
      class="h-[38px] w-[158px] rounded-full overflow-hidden hover:underline"
      :class="!isGeneral ? 'text-black bg-white' : 'text-secondary'"
    >
      Jornada
    </button>
  </div>
</template>
