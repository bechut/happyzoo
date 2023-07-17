export const PrismaClientServiceMock = (content: any) => ({
  getHappyZooClient: jest.fn().mockReturnValue(content),
});
