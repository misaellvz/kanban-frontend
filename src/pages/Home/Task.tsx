import { Button, Img, Text } from "components";

type TaskProps = {
  title: string;
  description: string;
  asignedTo: string;
  createdAt: string;
  status: number;
};

const Task = ({
  title,
  description,
  asignedTo,
  createdAt,
  status,
}: TaskProps) => {
  return (
    <div className="bg-gray-100 p-2 rounded-[10px] w-full">
      <div className="w-full">
        <div className="mt-[11px] w-full">
          <div className="flex justify-between">
            <Text
              className="text-base text-black-900"
              size="txtPoppinsRegular16"
            >
              {title}
            </Text>
            <Img
              className="h-5 w-5"
              src="images/img_attach.svg"
              alt="attach_One"
            />
          </div>

          <Text
            className="leading-[19.00px] text-[13px] text-black-900_7e w-full"
            size="txtPoppinsLight13"
          >
            {description}
          </Text>
        </div>
        <div className="flex flex-row items-center justify-between mt-[27px] w-full">
          <Button className="bg-black-900 flex h-[30px] items-center justify-center p-[9px] rounded-[50%] w-[30px]">
            <Img
              className="h-3"
              src="images/img_close_white_a700.svg"
              alt="close_One"
            />
          </Button>
          <div className="flex flex-row items-center justify-start">
            <Text
              className="ml-6 text-black-900_6c text-sm"
              size="txtPoppinsLight14"
            >
              {createdAt}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

Task.defaultProps = {
  title: "Home business advertising ideas",
  description: "Description",
  asignedTo: "Admin",
  createdAt: "2024-01-24 11:30",
  status: 0,
};

export default Task;
