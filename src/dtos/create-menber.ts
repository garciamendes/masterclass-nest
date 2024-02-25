import { IsNotEmpty } from "class-validator"

export class CreateMenberDTO {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  function: string
}