<template>
  <div class="bg-white">
    <!-- Header Menu -->
    <ul
      class="flex bg-white items-center justify-center overflow-hidden w-full max-w-[1000px] h-[60px] m-auto"
    >
      <!-- Feed -->
      <HeaderNavLink action="feed" />

      <!-- Market -->
      <HeaderNavLink action="market" />

      <!-- Team -->
      <HeaderNavLink action="team" />

      <!-- Standing -->
      <HeaderNavLink action="standings" />

      <!-- More -->
      <HeaderNavLink action="more" />
    </ul>
  </div>
</template>
