<script setup>
const route = useRoute()

if (route.params.group === 'admins' && !route.params.id) {
  console.log('Warning! Make sure user is authenticated!')
}
</script>

<template>
    <p>{{ $route.params.id }} - {{ $route.params.name }}</p>
</template>