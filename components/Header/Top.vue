<template>
  <div class="flex bg-white items-center justify-between w-full h-[60px]">
    <!-- Left -->
    <div class="flex items-center">
      <!-- Avatar -->
      <button class="ml-3 w-[38px] h-[38px]">
        <InterfaceUserAvatar />
      </button>

      <!-- Logo -->
      <img src="~/assets/header-logo-light.svg" class="h-[30px] ml-[6px]" />
    </div>

    <!-- Rigth -->
    <div class="flex">
      <!-- Balance -->
      <button
        class="px-[6px] text-sm mr-[6px] h-[38px] rounded-full border border-tertiary flex items-center hover:bg-hovered"
      >
        <InterfaceIcon icon="balance" class="fill-balance w-[18px] h-[15px] mr-2" />
        <span class="relative font-bold">2,3M</span>
      </button>

      <!-- Store -->
      <button
        class="px-[6px] text-sm mr-[6px] h-[38px] rounded-full border border-tertiary flex items-center hover:bg-hovered"
      >
        <InterfaceIcon icon="coin" class="fill-coin w-[18px] h-[15px] mr-2" />
        <span class="relative font-bold">51</span>
      </button>

      <!-- Players -->
      <button
        class="h-[38px] mr-3 w-[38px] flex justify-center items-center rounded-full border border-tertiary hover:bg-hovered"
      >
        <InterfaceIcon icon="search" class="fill-black w-[18px] h-[18px]" />
      </button>
    </div>
  </div>
</template>
