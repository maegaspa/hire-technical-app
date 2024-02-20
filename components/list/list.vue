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

export default {
    components: { Item },
    data () {
        return {
            items: [
                {
                    name: "Maliki",
                    slug: "maliki"
                },
                {
                    name: "Thinkerview",
                    slug: "thinkerview"
                },
                {
                    name: "Yatuu",
                    slug: "yatuu"
                },
                {
                    name: "François Theurel",
                    slug: "francois-theurel"
                },
            ]
        }
    }
}
</script>