import { Text } from "components";

type ColumnTitleProps = {
  title: string;
  bgColor: string;
};

const ColumnTitle = ({ title, bgColor }: ColumnTitleProps) => {
  return (
    <div className={`${bgColor} p-2.5 rounded-[10px] w-full`}>
      <Text
        className="ml-[9px] mt-[5px] text-base text-white-A700"
        size="txtPoppinsMedium16"
      >
        {title}
      </Text>
    </div>
  );
};

export default ColumnTitle;
