// new Vue({
//     el: "#vue-app",
//     data: {
//         grade: 5,
//         name:"",
//         job: "student",
//         websiteTag: '<a href ="https://www.youtube.com/> link here',
//         x: 0,
//         y: 0
//     },
//     methods:{
//         greeting: function(data){
//             return "Good" + data;
//         },
//         addgrade: function(){
//             this.grade += 5;
//         },
//         subgrade: function(){
//             this.grade -= 2;
//         },
//         update: function(event){
//             this.x = event.offsetX;
//             this.y = event.offestY;
//         },
//         logmsg: function(){
//             console.log("soemthing happened")
//         },
//         logName: function(){
//             console.log(this.name)
//         }
    

//     }
// })

new Vue ({
    el: "#todolist",
    data: {
        item: "",
        list: [
            {todo: "sleep"},
            {todo: "play"}
        ]
    },
    methods: {
        addtodo: function(){
            console.log(this.item);
            this.list.push({todo: this.item})
        }
    }
})