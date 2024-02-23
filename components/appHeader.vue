<template>
    <header>
        <h1 class="pt-24 pb-24 text-center mb-0">Test technique Tipeee</h1>
        <div class="t-item-counter-container">
            Nombre d'entrées :
            <span class="t-item-counter-amount">{{ itemCount }}</span>
        </div>
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
    h1 {
        background-image: linear-gradient(90deg,#86b3e4,#6f8fe7);
        color: white;
    }

    .t-item-counter-container {
        display: flex;
        align-items: center;
        justify-content: end;
        gap: 5px;
        margin-bottom: 15px;
        font-size: 0.8rem;
        color: #898b8c;
        box-shadow: 0px 2px 4px rgba(137, 139, 140, 0.2);
        padding: 8px;
    }
    .t-item-counter-amount {
        font-weight: 900;
        background-color: #d64758;
        border-radius: 4px;
        color: #fff;
        display: block;
        padding: 4px 13px;
    }
</style>
