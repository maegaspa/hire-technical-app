<template>
    <header>
        <h1 class="pt-24 pb-24 text-center mb-0">Test technique Tipeee</h1>
            <div class="sub-header-container">
                <a href="/about" class="about-link">Comment ça marche ?</a>
                <a href="/" class="pages-link">
                    <span class="t-item-counter-amount">{{ itemCount }}</span>
                    {{ itemCount < 2 ? "page" : "pages" }}
                </a>
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
    header {
        z-index: 1000;
        top: 0;
        position: sticky;
    }

    h1 {
        background-image: linear-gradient(-145deg,#d54757,#e9595b);
        color: white;
    }

    .sub-header-container {
        display: flex;
        align-items: center;
        margin-bottom: 25px;
        font-size: 0.8rem;
        color: #898b8c;
        border-bottom: 1px solid #e8e8e8;
        padding: 8px 10px;
        backdrop-filter: blur(8px);
        background-color: hsla(0,0%,100%,.9);
    }

    .t-item-counter-amount {
        font-weight: 900;
        background-color: #d64758;
        border-radius: 4px;
        color: #fff;
        display: block;
        padding: 4px 13px;
    }

    .about-link {
        display: flex;
        margin-right: auto;
        font-weight: bold;
        text-decoration: none;
    }

    .about-link:hover {
        text-decoration: underline;
    }

    .pages-link {
        display: flex;
        gap: 5px;
        align-items: center;
        text-decoration: none;
    }
</style>
