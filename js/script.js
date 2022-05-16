const app = new Vue({
    el: '#root',
    data: {
        numberOfMail: 10,
        thisEmail: '',
        arrayEmails: []
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result) => {
                this.thisEmail = result.data.response;
                this.arrayEmails.push(this.thisEmail);
            });                
        }
    }
});