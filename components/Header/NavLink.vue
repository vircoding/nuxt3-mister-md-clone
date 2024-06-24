<script setup>
  const props = defineProps({
    action: {
      type: String,
      required: true,
    },
  });

  const { generateNavLinkProps } = useUtils();

  const { to, icon, label } = generateNavLinkProps(props.action);

  const isActive = computed(() => useRoute().name === to);
</script>

<template>
  <li class="h-full grow basis-0 text-center hover:bg-hovered">
    <NuxtLink :to="{ name: to }" class="w-full h-full flex flex-col justify-center items-center">
      <!-- Icon -->
      <InterfaceIcon
        :icon="`${icon}-${isActive ? 'on' : 'off'}`"
        class="w-[18px] h-[18px]"
        :style="`fill: ${isActive ? 'black' : 'rgb(153, 165, 184)'}`"
      />

      <!-- Label -->
      <span
        class="mt-1 font-bold text-[11px] leading-none"
        :style="`color: ${isActive ? 'black' : ''}`"
        >{{ label }}</span
      >
    </NuxtLink>
  </li>
</template>
