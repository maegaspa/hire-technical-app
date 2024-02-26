<template>
    <div>
        <h3>Liste de pages</h3>
        <div class="grid sm:grid-cols-2 gap-16" v-if="items.length > 0">
            <Item v-for="item in items" :key="item.slug" :item="item" />
        </div>
        <div v-else>
            <p class="no-pages">Aucune page créée pour le moment :(</p>
        </div>
    </div>
</template>

<script>
import Item from '@/components/list/item'
import { mapState } from 'vuex';

export default {
    components: { Item },
    computed: {
        ...mapState(['items'])
    }
}
</script>

<style scoped>
    h3 {
        color: #7a7979;
    }

    .no-pages {
        font-weight: 500;
        color: #e7e4e4;
    }
</style>