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

test('New users should be created', async () => {
    const user = {
        id: 1,
        username: "test",
        password: "test"
    }

    mockCtx.prisma.user.create.mockResolvedValue(user)

    const result = userService.createUser(user.username, user.password);
    await expect(result).resolves.toEqual(user);
});

test('All users should be listed', async () => {
    const user1 = {
        id: 1,
        username: "test",
        password: "test"
    }
    const user2 = {
        id: 2,
        username: "test2",
        password: "test2"
    }

    mockCtx.prisma.user.findMany.mockResolvedValue([user1, user2])
    await expect(userService.getUsers()).resolves.toEqual([user1, user2])
})