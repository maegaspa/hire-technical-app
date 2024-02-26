<template>
    <form @submit.prevent="addItem">
        <h3>Ajouter une page</h3>
        <div>
            <label>Nom :</label>
            <input
                class="mb-16"
                id="name"
                v-model="fields.name"
                type="text"
                required
            />
        </div>
        <div>
            <label>Slug :</label>
            <input
                class="mb-16"
                id="slug"
                v-model="fields.slug"
                type="text"
                required
            />
        </div>
        <button class="btn btn-primary" type="submit">Ajouter</button>
    </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data () {
        return {
            fields: {
                name: null,
                slug: null
            }
        }
    },
    methods: {
        ...mapActions(['addNewItem']),
        async addItem() {
            try {
                await this.addNewItem({
                    name: this.fields.name,
                    slug: this.fields.slug
                })
                this.fields.name = null
                this.fields.slug = null
            } catch (error) {
                console.error('Erreur lors de l\'ajout de l\'élément :', error);
            }
        }
    }
}
</script>

<style scoped>
    h3 {
        color: #7a7979;
    }

    input:not([type="radio"]):not([type="checkbox"]) {
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        box-shadow: 1px 1px 0 0 #e8e8e8;
        color: #535657;
        font-size: 1rem;
        font-weight: 400;
        padding: 0.5rem;
        transition: all .1s ease;
    }

    input:not([type="radio"]):not([type="checkbox"]):focus {
        border-color: #4dc4d6;
        box-shadow: inset 0 0 0 3px #b6e5ec;
        outline: 0;
    }

    .btn {
        background-color: #5fec5f;
        color: white;
        border-radius: 30px;
    }

    .btn:hover {
        background-color: #16ba16;
    }

    label {
        min-width: 50px;
        color: #6c757d;
    }
</style>