import { ErrorCode } from './../utils/error-code';
import { ErrorException } from './../utils/error-exception';
import {UserRepository} from "../repository/user.repository";
import {Context} from "./prisma.service";

export class UserService {

    private userRepository: UserRepository;

    constructor(ctx: Context) {
        this.userRepository = new UserRepository(ctx);
    }

    public createUser(username:String, password:String, ageGroup:number, sex:Boolean) {
        try {
            return this.userRepository.createUser(
                {
                    username: username as string,
                    password: password as string,
                    ageGroup: ageGroup as number,
                    sex: sex as boolean
                }
            );
        } catch (e) {
            throw new ErrorException(ErrorCode.DatabaseError)
        }
    }

    public getUsers() {
        try {
            return this.userRepository.getAllUsers()
        } catch (e) {
            throw new ErrorException(ErrorCode.DatabaseError)
        }
    }

}