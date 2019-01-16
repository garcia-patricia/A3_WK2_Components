(() => {
    //component will go here

    const liveuser = {
        props: ['first_name','last_name', 'role'],
        template: "#activeuser",

        methods: {
            logChildMsg(){
                console.log("hello from the child component");
            },
            runParentFunc() {
                this.$emit('pass-func-call-up');
            }
        },

        created: function(){
            console.log('child component is live');
        }
    };

    const vm = new Vue({
        el: '#app',

        data: {
            message: "whats poppin'"
        },
        created: function(){
            console.log('parent is live');
        },
        methods: {
            logParent(message){
                console.log("from the parent", message);
            },
            logMainMessage(message){
                console.log("called from inside child, lives in the parent", message);
            }
        },
        components: {
            // the tag on the left 'user' is what has to be on webpage
            // calling the const liveuser
            // object with only one property, no need to close with ;
            user: liveuser
        }
    })
})();