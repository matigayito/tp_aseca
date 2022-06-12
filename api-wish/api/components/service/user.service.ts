import {UserRepository} from "../repository/user.repository";
import {DatabaseError, NotFoundError} from "../utils/errors";
import {Context} from "./prisma.service";

export class UserService {

    private userRepository: UserRepository;

    constructor(ctx: Context) {
        this.userRepository = new UserRepository(ctx);
    }

    public async createUser(username:String, password:String) {
        try {
            return await this.userRepository.createUser({username: username as string, password: password as string});
        } catch (e) {
            throw new DatabaseError(e.message)
        }
    }

    public async getUsers() {
        try {
            return await this.userRepository.getAllUsers()
        } catch (e) {
            throw new DatabaseError(e.message)
        }
    }

}