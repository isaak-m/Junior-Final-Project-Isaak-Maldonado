function advicerator() {
    var x= Math.floor(Math.random()*20);
    switch (x) {
        case 0: 
            return `Take care of your dogs!`
        case 1:
            return `Take some time to be bored and just think, fr.`
        case 2:
            return `Take walks with dogs and their owner to keep yourself occupied.`
        case 3:
            return `Always take the dog with possibly supervised walks.`
        case 4:
            return `Have a planned route and be the leader of the walk.`
        case 5:
            return `Train not only the dog, but also yourself to not perform any peculiar actions.`
        case 6:
            return `KEEP YOUR COOL AT ALL TIMES!`
        case 7:
            return `Stay consistent in both yours' and the dogs' routine.`
        case 8:
            return `Keep notes of your progress with the dog and yourself.`
        case 9:
            return `Make the dog and yourself comfortable with the dog.`
        case 10:
            return `Know boundaries between the dog, you, and the client.`
        case 11:
            return `Feel able to contact the client`
        case 12:
            return `Talk to the dog like your friends.`
        case 13:
            return `Make the dog feel like another person and see what they may want.`
        case 14:
            return `Help the dog walk, offer water breaks and try to see what the dog wants.`
        case 15:
            return `Get client and those that surround them on board with the dogs schedule and needs.`
        case 16:
            return `Converse with the client as well as the dog to get them used to the dogs routine and needs.`
        case 17:
            return `Choose the toys wisely and sparingly`
        case 18:
            return `Lead the dogs by example.`
        case 19:
            return `Understand that mistakes in both your life and the dogs life are unchangable and you should learn to live with that.`
    }
}
const app = Vue.createApp ({
    data() {
        return {
            advice: advicerator()
        }
    }
})
app.mount('#app')