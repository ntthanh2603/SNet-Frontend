import { Avatar } from '@components/avatar';
import {
  Button,
  CircleButton,
  EmojiButton,
  GifButton,
  ImageButton,
  TagButton,
} from '@components/button';
import { ArrowBackIcon } from '@components/icons';
import CloseIcon from '@components/icons/close';
import { Typography } from '@components/typography';

//-------------------------------------------------------------------------

interface ICreatePostProps {
  onBack: () => void;
}

export default function CreatPost({ onBack }: ICreatePostProps) {
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#444444] z-20 md:bg-[#12121299] shadow-stack">
      <div className="hidden md:block absolute top-2 right-2 z-20">
        <Button
          className="size-[40px] p-2.5"
          child={<CloseIcon />}
          onClick={onBack}
        />
      </div>
      <div className="w-full h-full bg-neutral3-70 md:mx-auto md:w-[40rem] md:h-[16rem] md:mt-[10%] md:rounded-button md:backdrop-blur-[32px]">
        <div className="md:hidden w-full flex items-center justify-between p-3">
          <CircleButton
            className="size-10 p-2.5"
            children={<ArrowBackIcon />}
            onClick={onBack}
          />
          <CircleButton
            className="px-[1.5rem] py-[0.75rem] rounded-[2rem] text-secondary"
            children={<Typography level="base2sm">Post</Typography>}
          />
        </div>

        <div className="w-full max-h-screen mx-auto flex justify-center items-center md:h-full md:flex-col md:items-start md:justify-between md:static md:rounded-[2rem] ">
          <div className="w-full h-fit flex justify-between items-center gap-3 p-3 rounded-[1.25rem]">
            <Avatar
              src={
                'https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg'
              }
            />
            <input
              type="text"
              placeholder="Start a post..."
              className="flex-1 bg-transparent placeholder:text-tertiary font-normal text-primary"
            />
          </div>

          <div className="fixed bottom-4 w-fit mx-auto rounded-[1.25rem] p-2 flex gap-2 items-center bg-neutral2-3 z-20 md:w-full md:bg-transparent md:relative md:mx-0 md:justify-between md:bottom-0">
            <EmojiButton />
            <ImageButton />
            <GifButton />
            <TagButton />

            <span className="grow"></span>

            <Button
              type="submit"
              className="hidden md:flex px-[1.5rem] py-[0.75rem] rounded-[2rem] text-secondary"
              child={<Typography level="base2sm">Post</Typography>}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
