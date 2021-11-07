<template>
    <div class="search">
        <input type="text"
            v-model="query"

        >
    </div>
</template>

<script>


export default {
    name: "search-component",
    data:() => ({
        query: ''
    }),
    components: {

    },
    methods: {
        test() {
            const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
            const token = "ab237855f0c699002d2157207ddd43736f6c9a9a";


            let options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token
                },
                body: JSON.stringify({query: this.query})
            }

            fetch(url, options)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log("error", error));
        }

    }
}
</script>

<style>

</style>
