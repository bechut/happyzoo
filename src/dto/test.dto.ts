import { IsNotEmpty } from 'class-validator';

export class Test {
  @IsNotEmpty()
  test: string;
}
