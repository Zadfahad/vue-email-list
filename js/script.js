const app = new Vue({
    el: '#root',
    data: {
        numberOfMail: 10,
        thisMail: '',
        arrayMails: []
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.thisMail = result.data.response;
                this.arrayMails.push(this.thisMail);
            });                
        }
    }
});