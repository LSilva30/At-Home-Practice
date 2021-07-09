// Add the "newMessage" to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)   //<-- messages is the object & .push is the method you're using to add the variable newMessage into the end of the array
console.log(messages)