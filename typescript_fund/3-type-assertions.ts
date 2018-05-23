let message = 'abc';
let endsWithC = message.endsWith('c');

//because we did not initialize message2 to a type
//it's being set to any.
let message2;
message2 = 'abc';
//se we need to set the message2 type to be a string.
//this is what we call type assertions
//one way to do this is: <string>
let message3; 
message3 = 'abc';
let endsWithC1 = (<string>message).endsWith('c');
//another way is:
let endsWithC2 = (message as string).endsWith('c');