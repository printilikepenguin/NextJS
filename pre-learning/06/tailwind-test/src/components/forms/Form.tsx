import Button from "./Button";
import CheckBox from "./CheckBox";
import Input from "./Input";

export default function Form() {
  return (
    <>
      <div className="item-middle">
        <Button type="button" name="add-btn" className="bg-[#4F4F4F]" disabled>
          Add
        </Button>
        <Input type="password" placeholder="Enter Your Password" />
        <CheckBox>
          <p className="text-sm">
            I agree with <em className="font-bold not-italic">terms</em> and{" "}
            <em className="font-bold not-italic">policies</em>.
          </p>
        </CheckBox>
        <CheckBox>
          <p className="text-sm">
            I agree with <em className="font-bold not-italic">terms</em> and{" "}
            <em className="font-bold not-italic">policies</em>.
          </p>
        </CheckBox>
      </div>
    </>
  );
}
