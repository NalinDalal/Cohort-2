import { Admin } from "@repo/ui/admin";
import { InputBox } from "@repo/ui/input-box"; //input-box called here which is created in the packages folder
import { InputBox2 } from "@repo/ui/input-box2";

export default function () {
  return (
    <div>
      Admin Page introduced, hi from admin page
      <Admin />
      <InputBox />
      <InputBox2 />
    </div>
  );
}
