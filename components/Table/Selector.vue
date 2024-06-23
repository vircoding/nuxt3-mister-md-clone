<script setup>
  const [isGeneral, toggle] = useToggle();
</script>

<template>
  <div
    class="mx-[129px] my-[24px] border max-w-[90%] bg-tertiary border-tertiary overflow-hidden rounded-full"
  >
    <button
      @click.prevent="toggle(true)"
      class="h-[38px] w-[158px] rounded-full overflow-hidden text-sm font-bold hover:underline"
      :class="isGeneral ? 'text-black font-bold bg-white' : 'text-secondary font-semibold'"
    >
      General
    </button>
    <button
      @click.prevent="toggle(false)"
      class="h-[38px] w-[158px] rounded-full overflow-hidden text-sm hover:underline"
      :class="!isGeneral ? 'text-black font-bold bg-white' : 'text-secondary font-semibold'"
    >
      Jornada
    </button>
  </div>
</template>
