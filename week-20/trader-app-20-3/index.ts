import { DefaultService } from "./generated";
async function main() {
  const res = await DefaultService.getUser("1234456");
  console.log(res);
}
main();
