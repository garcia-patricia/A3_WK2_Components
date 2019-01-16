(() => {
    //component will go here

    const HomePageComponent = {
        template: "<h2>You're on the home page</h2>"
    };

    const UsersPageComponent = {
        template: "<h2>You're on the users page</h2>"
    };

    const routes = [
        {path: '/', name: 'home', component: HomePageComponent},
        {path: '/users', name: 'users', component: UsersPageComponent}
    ];

    const router = new VueRouter({
        routes
    })
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
            'HomePageComponent': HomePageComponent,
            'UsersPageComponent': UsersPageComponent
        },
        router: router
    })
})();