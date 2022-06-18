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
        password: "test",
        ageGroup: 18,
        sex: true
    }

    mockCtx.prisma.user.create.mockResolvedValue(user)

    const result = userService.createUser(user.username, user.password, user.ageGroup, user.sex);
    await expect(result).resolves.toEqual(user);
});

test('All users should be listed', async () => {
    const user1 = {
        id: 1,
        username: "test",
        password: "test",
        ageGroup: 18,
        sex: true
    }
    const user2 = {
        id: 2,
        username: "test2",
        password: "test2",
        ageGroup: 18,
        sex: true
    }

    mockCtx.prisma.user.findMany.mockResolvedValue([user1, user2])
    await expect(userService.getUsers()).resolves.toEqual([user1, user2])
})