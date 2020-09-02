import "reflect-metadata";
import { createConnection } from "typeorm";
// 引入刚刚定义的实体类
import { User } from "./entity/User";

createConnection()
	.then(async (connection) => {
		// const user = new User();
		// user.username = "张三";
		// user.password = "123456";
		// // save里面传递一个对象
		// await connection.manager.save(user);

		// const userRepository = connection.getRepository(User);
		// const user2 = await userRepository.findOne(1);
		// user2.password = "23456";
		// await userRepository.save(user2);

		// 4.删除数据
		// 4.1创建一个句柄
		const userRepository = connection.getRepository(User);
		// 4.2根据句柄去查询实体findOne传递数字会默认根据id查询
		const user = await userRepository.findOne(1);
		// 4.3删除数据
		await userRepository.remove(user);
	})
	.catch((error) => console.log(error));
