import { AvatarGroup } from '@components/avatar';
import { Button, CircleButton } from '@components/button';
import { Typography } from '@components/typography';
import style from '@styles/auth.module.css';
import React from 'react';
import { Input } from './components';

//----------------------------------------------------------------------

const avatars = [
  {
    id: '1',
    src: 'https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg',
    alt: 'Avatar 1',
  },
  {
    id: '2',
    src: 'https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg',
    alt: 'Avatar 2',
  },
  {
    id: '3',
    src: 'https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg',
    alt: 'Avatar 2',
  },
];

export default function Login() {
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isValidEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isBtnEnable = fullname !== '' && password !== '' && isValidEmail(email);

  return (
    <>
      <div className="bg-auth w-full h-svh flex flex-col justify-around items-center px-[2.5rem]">
        <div id="stars" className={style.stars}></div>
        <div className="w-full mx-auto md:mt-0 md:w-[25.5rem] md:max-h-[37.25rem] md:p-[40px] md:bg-neutral1-5 md:rounded-[32px] md:shadow-auth-card md:backdrop-blur-[50px]">
          <div
            className="flex flex-col mb-[40px] items-center gap-6"
            id="top-bar-container "
          >
            <CircleButton className="size-[60px] p-[18px]">
              <img src="/svg/circle_logo.svg" alt="Bento Logo" />
            </CircleButton>
            <Typography level="h4" className="text-primary">
              Bento social
            </Typography>
          </div>
          <form>
            <div className="flex flex-col gap-[0.875rem] mb-[1.5rem]">
              <Input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                icon={
                  <object
                    type="image/svg+xml"
                    data="/svg/ic_reset_password.svg"
                    className="absolute right-[8px] top-[8px] cursor-pointer"
                  />
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full base px-[2rem] py-[0.875rem] text-secondary text-sm font-semibold opacity-100"
                child={<Typography level="base2sm">Sign In</Typography>}
                disabled={!isBtnEnable}
              />

              <Button
                className="w-full px-[2rem] py-[0.875rem]"
                child={
                  <div className="flex items-center gap-3 justify-center">
                    <img
                      src="/svg/ic_google.svg"
                      alt="Google Logo"
                      className="w-[20px] h-[20px]"
                    />
                    <Typography level="base2sm" className="text-secondary ">
                      Sign in with Google
                    </Typography>
                  </div>
                }
              />

              <Typography
                level="captionr"
                className="opacity-80 flex items-center gap-2 text-secondary justify-center"
              >
                You have an account?
                <a href="/login" className="opacity-100 font-semibold">
                  <Typography level="captionsm" className="opacity-100">
                    Sign in, here!
                  </Typography>
                </a>
              </Typography>
            </div>
          </form>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-[24px] md:justify-center md:items-center">
          <Typography className="text-tertiary opacity-80 ">
            Join over
            <Typography className="font-bold text-primary mx-1">2M</Typography>
            global social media users
          </Typography>

          <AvatarGroup
            className="size-[2.625rem] min-w-[2.625rem]"
            avatars={avatars}
          />
        </div>
      </div>
    </>
  );
}
