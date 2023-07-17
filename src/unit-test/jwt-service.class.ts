export const JwtServiceMock = (content: any) => ({
  get: jest.fn().mockReturnValue(content),
});
