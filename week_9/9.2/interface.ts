interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
    gender?: string; // says that this is optionally added
};

function isLegal1(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}