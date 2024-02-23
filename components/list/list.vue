<template>
    <div>
        <h3>Liste de pages</h3>
        <div class="grid sm:grid-cols-2 gap-16">
            <Item v-for="item in items" :key="item.slug" :item="item" />
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