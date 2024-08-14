import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
export const Signup = () => {
  return (
    <div>
      Signup
      <div className="grid grid-cols-2">
        <div>
          <Auth type="signup" />
        </div>
        <div className="invisible lg:visible">
          {/* suggest that ideally invisible, above md visible*/}
          <Quote />
        </div>
      </div>
    </div>
  );
};
