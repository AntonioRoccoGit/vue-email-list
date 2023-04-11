const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
        }
    },
    mounted() {
        for(let i = 0; i < 10; i++){
            this.generateEmail();
        };
    },
    methods: {
        generateEmail() {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
                console.log(resp.data.response);
                this.emailList.push(resp.data.response);
            } )
        }
    }
}).mount("#app")