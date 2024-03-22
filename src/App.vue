<template>
  <div id="app" class="min-h-screen h-fit bg-[#000] font-auge antialiased">
    <router-view />
  </div>
</template>

<style>
.no-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}
.no-scrollbar::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
</style>

<script setup lang="ts">

</script>
