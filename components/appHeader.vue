<template>
    <header>
        <h1>Mon En-tête</h1>
        <p>Nombre d'entrées dans la liste de pages : {{ itemCount }}</p>
    </header>
</template>

<script>
export default {
	computed: {
		itemCount() {
			return this.$store.state.items.length;
		}
	}
}
</script>

<style scoped>
</style>
