<template>
    <div>
        <div class="layout-maxed">
            <section class="grid sm:grid-cols-2 gap-16">
                <AddItem />
                <List />
            </section>
        </div>
    </div>
</template>

<script>
import AddItem from '@/components/list/addItem'
import List from '@/components/list/list'

export default {
    name: 'IndexPage',
    layout: 'default',
    components: { AddItem, List }
}
</script>

<style scoped>
h2 {
    background-image: linear-gradient(90deg,#86b3e4,#6f8fe7);
    color: white;
}
</style>