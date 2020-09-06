import "reflect-metadata";
import { createConnection } from "typeorm";
// 引入刚刚定义的实体类
import { User } from "./entity/User";
import { UserExtend } from "./entity/UserExtend";
import { Posts } from "./entity/Posts";
import { Tags } from "./entity/Tag";

createConnection()
	.then(async (connection) => {
		const postsRepository = connection.getRepository(Posts);
		const result = await postsRepository.findOne({
			where: { id: 4 },
			relations: ["tags", "user"],
		});
		console.log(result);
	})
	.catch((error) => console.log(error));
