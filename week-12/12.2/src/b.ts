interface User {
  id: string;
  name: string;
  age: string;
  email: string;
  password: string;
}

type UpdateProps = Pick<User, "name" | "age" | "email">;

function updateUser(UpdatedProps: UpdateProps) {}

const displayUserProfile = (user: UserProfile) => {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
};
