<template>
  <div class="order-container">
    <div class="relative">
      <div class="w-full absolute top-0 h-16 bg-gradient-to-b from-black opacity-60"></div>
      <img class="w-full h-72 object-cover" src="../assets/images/soup.jpg" alt="soup" />
    </div>
    <div class="bg-yellow p-4 rounded-xl z-10">
      <div class="flex flex-col items-center my-4">
        <div class="border border-green rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
          <span class="block text-green font-display font-bold text-lg mb-1">01</span>
        </div>
        <h1 class="font-display text-green font-bold text-3xl mb-4">Bacon Sandwich</h1>
        <p class="text-center text-green text-xs font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sequi alias dolorem mollitia non aliquam quod a
          tempore!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.order-container {
  display: grid;
  min-height: 100vh;
  grid-template-rows: minmax(40%, 300px) 60%;
}
</style>
