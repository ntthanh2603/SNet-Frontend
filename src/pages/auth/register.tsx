import { AvatarGroup } from '@components/avatar';
import { Button, CircleButton } from '@components/button';
import { Typography } from '@components/typography';
import style from '@styles/auth.module.css';
import React from 'react';
import { Input } from './components';
import axiosInstance from '@lib/axiosInstace';
import { _avatarData as fakeAvatar } from '@_mocks/_avatar';

//----------------------------------------------------------------------

export default function Register() {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [showOtp, setShowOtp] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const isValidEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isBtnEnable = username !== '' && password !== '' && isValidEmail(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!showOtp) {
        const response = await axiosInstance.post('/users/send-otp/signup', {
          username,
          email,
          password,
        });

        if (response.data.statusCode === 201) {
          setShowOtp(true);
        } else {
          setError('Không thể tạo tài khoản');
        }
      } else {
        const response = await axiosInstance.post('/users/verify-otp/signup', {
          email,
          password,
          username,
          otp,
        });

        if (response.data.statusCode === 201) {
          alert('Đăng ký thành công!');
          window.location.href = '/login';
        }
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Có lỗi xảy ra');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-auth w-full h-svh flex flex-col justify-around items-center px-[2.5rem]">
        <div id="stars" className={style.stars}></div>
        <div className="w-full mx-auto md:mt-0 md:w-[25.5rem] md:max-h-[37.25rem] md:p-[40px] md:bg-neutral1-5 md:rounded-[32px] md:shadow-auth-card md:backdrop-blur-[50px]">
          <div
            className="flex flex-col mb-[10px] items-center gap-6 "
            id="top-bar-container "
          >
            <CircleButton className="size-[60px] p-[18px]">
              <img src="/svg/circle_logo.svg" alt="Bento Logo" />
            </CircleButton>
            <Typography level="h4" className="text-primary">
              Tạo tài khoản SNet
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-[0.875rem] mb-[1.5rem]">
              <Input
                type="text"
                name="fullname"
                placeholder="Họ và tên"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={showOtp}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={showOtp}
              />
              <Input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={showOtp}
                icon={
                  <object
                    type="image/svg+xml"
                    data="/svg/ic_reset_password.svg"
                    className="absolute right-[8px] top-[8px] cursor-pointer"
                  />
                }
              />
              {showOtp && (
                <Input
                  type="text"
                  name="otp"
                  placeholder="Nhập mã OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
            </div>

            {error && (
              <Typography
                level="captionr"
                className="text-error text-center mb-3"
              >
                {error}
              </Typography>
            )}

            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full base px-[2rem] py-[0.875rem] text-secondary text-sm font-semibold opacity-100"
                child={
                  <Typography level="base2sm">
                    {loading
                      ? 'Đang xử lý...'
                      : showOtp
                        ? 'Đăng ký'
                        : 'Xác thực OTP'}
                  </Typography>
                }
                disabled={loading || (!showOtp ? !isBtnEnable : !otp)}
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
                      Đăng nhập với Google
                    </Typography>
                  </div>
                }
              />

              <Typography
                level="captionr"
                className="opacity-80 flex items-center gap-2 text-secondary justify-center"
              >
                Bạn đã có tài khoản?
                <a href="/login" className="opacity-100 font-semibold">
                  <Typography level="captionsm" className="opacity-100">
                    Đăng nhập tại đây!
                  </Typography>
                </a>
              </Typography>
            </div>
          </form>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-[24px] md:justify-center md:items-center">
          <Typography className="text-tertiary opacity-80 ">
            Số người tham gia
            <Typography className="font-bold text-primary mx-1">
              2 triệu
            </Typography>
            người dùng toàn cầu
          </Typography>

          <AvatarGroup
            className="size-[2.625rem] min-w-[2.625rem]"
            avatars={fakeAvatar}
          />
        </div>
      </div>
    </>
  );
}
