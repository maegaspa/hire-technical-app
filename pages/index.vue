<template>
    <div>
        <div class="layout-maxed">
            <section class="grid sm:grid-cols-2 gap-16 mx-20">
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
