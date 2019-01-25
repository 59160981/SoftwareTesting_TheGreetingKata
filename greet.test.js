const greet = require('./greet'); 

test('Write a method greet(name)', () =>{
    expect(greet("Bob"));
});

test('re1:when name is "Bob", the method should return a string "Hello, Bob."', () =>{
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('re1.1:when name is "Boat", the method should return a string "Hello, Boat."', () =>{
    expect(greet("Boat")).toBe("Hello, Boat.");
});

test('re2:null, then the method should return the string "Hello, my friend."', () =>{
    expect(greet(null)).toBe("Hello, my friend.");
});

test('re3:when name is "JERRY" then the method should return the string "HELLO JERRY!"', () =>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

test('re3.1:when name is "BOAT" then the method should return the string "HELLO BOAT!"', () =>{
    expect(greet("BOAT")).toBe("HELLO BOAT!");
});

test('re4:when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () =>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

test('re4.1:when name is ["Boat", "Sarawut"], then the method should return the string "Hello, Jill and Jane."', () =>{
    expect(greet(["Boat", "Sarawut"])).toBe("Hello, Boat and Sarawut.");
});

test('re5:when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () =>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});

test('re5.1:when name is ["Boat", "Sarawut", "Sukpot"], then the method should return the string "Hello, Boat, Sarawut, and Sukpot."', () =>{
    expect(greet(["Boat", "Sarawut", "Sukpot"])).toBe("Hello, Boat, Sarawut, and Sukpot.");
});

test('re6:when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () =>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});

test('re6.1:when name is ["BOAT", "Sarawut", "Sukpoth"], then the method should return the string "Hello, Sarawut and Sukpoth. AND HELLO BOAT!"', () =>{
    expect(greet(["BOAT", "Sarawut", "Sukpoth"])).toBe("Hello, Sarawut and Sukpoth. AND HELLO BOAT!");
});

test('re7:when name is ["Bob", "Charlie, Dianne"], then the method should return the string "Hello, Bob, Charlie, and Dianne.".', () =>{
    expect(greet(["Bob", "Charlie, Dianne"])).toBe("Hello, Bob, Charlie, and Dianne.");
});
test('re7.1:when name is ["Boat, Sarawut","Sukpot"], then the method should return the string "Hello, Boat, Sarawut, and Sukpot.".', () =>{
    expect(greet(["Boat, Sarawut","Sukpot"])).toBe("Hello, Boat, Sarawut, and Sukpot.");
});


