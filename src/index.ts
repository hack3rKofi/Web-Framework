import { User } from "./models/User";

const user = new User({ name: "Samuel", age: 20 });

user.set({ name: "Sampson" });

user.on('change', ()=>console.log('Change #1'))
user.on('change', ()=>console.log('Change #2'))
user.on('save', ()=>console.log('Save was successful'))


user.trigger('change')
user.trigger('save')
user.trigger('random')
console.log(user);
