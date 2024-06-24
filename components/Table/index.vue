<script setup>
  const players = [
    {
      username: 'Luismi 🍷🧐',
      playersCount: 11,
      value: 70772000,
      points: 111,
      uid: '13126313',
    },
    {
      username: 'Ronaldo',
      playersCount: 12,
      value: 59559000,
      points: 109,
      uid: '13210718',
    },
    {
      username: 'Walter',
      playersCount: 12,
      value: 62616000,
      points: 102,
      uid: '13111206',
    },
    {
      username: 'El Melly',
      playersCount: 12,
      value: 69316000,
      points: 68,
      uid: '13211109',
    },
    {
      username: 'Karla98',
      playersCount: 10,
      value: 53267000,
      points: 60,
      uid: '13211206',
    },
  ];
</script>

<template>
  <div class="max-w-[600px] p-3 mx-auto">
    <TableSelector />
    <TablePanel :players="players" />
  </div>
</template>
