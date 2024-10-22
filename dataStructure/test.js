import { plainToInstance } from 'class-transformer';

const plain = {
  name: 'dd',
  age: 12,
};

class User {
  name = '';
  age = 0;
  sex = 'male';

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

const user = plainToInstance(User, plain);

console.log(user);
console.log(user.getName());
