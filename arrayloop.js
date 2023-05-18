let queue = ['Sofia', 'David', 'Juan'];

// Adding two more people to the back of the line
queue.push('Sara', 'Augustin');

// The first person in line is called to the teller
queue.shift();

// David saves a spot for his friend Renata
const davidIndex = queue.indexOf('David');
queue.splice(davidIndex + 1, 0, 'Renata');

// One more person (Elena) shows up and goes to the end of the line
queue.push('Elena');

console.log(queue);
