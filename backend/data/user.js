import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},
	{
		name: 'Dinesh Satya',
		email: 'dinesh@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
	{
		name: 'Dinesh Danda',
		email: 'danda@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
