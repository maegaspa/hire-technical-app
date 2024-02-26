<template>
    <div>
        <h2 class="pt-24 pb-24 text-center">Comment ça marche ?</h2>
        <div class="layout-maxed mx-auto max-w-screen-md">
            <p>
                Sur Tipeee, chaque créateur peut lancer sa page de soutien, peu importe ses besoins, ce qu’il fait ou d’où il vient.
            </p>
            <p>
                Sa communauté peut le soutenir financièrement en lui envoyant un Tip du montant de son choix, de façon ponctuelle ou récurrente (sans durée d’engagement).
            </p>
            <p>
                Ce soutien est volontaire : il permet d’aider un créateur à développer son activité et de lui dire qu'on aime son travail. S’il le souhaite, le créateur peut proposer différentes contreparties pour ses tipeurs.
            </p>
            <div class="text-center mt-24">
                <a href="/" class="t-error-forward home-blue-highlight n-link-active">Retour à l'accueil</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'AboutPage',
    layout: 'default'
}
</script>

<style scoped>
    h2 {
        color: #d64758;
    }

    a:hover {
        color: #d64758;
    }

    .t-error-forward {
        color: inherit;
        display: inline-block;
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: none;
    }

    .home-blue-highlight {
        background-image: linear-gradient(120deg,#4dc4d6,#4dc4d6);
        background-position: 0 100%;
        background-repeat: no-repeat;
        background-size: 100% 45%;
    }
</style>