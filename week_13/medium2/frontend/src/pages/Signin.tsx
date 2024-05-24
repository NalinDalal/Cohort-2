import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
export const Signin = () => {
  return (
    <div>
      SignIn Page
      <div className="grid grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="invisible lg:visible">
          {/* suggest that ideally invisible, above md visible*/}
          <Quote />
        </div>
      </div>
    </div>
  );
};
