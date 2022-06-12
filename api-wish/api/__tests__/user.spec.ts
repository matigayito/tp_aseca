import { UserService } from '../components/service/user.service';
import {Context, createMockContext, MockContext} from "../components/service/prisma.service";

let mockCtx: MockContext;
let ctx: Context;
let userService: UserService;

beforeEach(() => {
    mockCtx = createMockContext()
    ctx = mockCtx as unknown as Context
    userService = new UserService(ctx);
})

test('should create a new item', async () => {
    const user = {
        username: "test",
        password: "test"
    }

    console.log(userService)
    const result = await userService.createUser(user.username, user.password);
    console.log(result)
    await expect(result).resolves.toEqual(user);
});