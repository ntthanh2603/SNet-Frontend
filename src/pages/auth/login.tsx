import { _avatarData as fakeAvatar } from '@_mocks/_avatar';
import { AvatarGroup } from '@components/avatar';
import { Button, CircleButton } from '@components/button';
import { Typography } from '@components/typography';
import styled from '@styles/auth.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from './components';
import axiosInstance from '@lib/axiosInstace';

//----------------------------------------------------------------------

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [showOtp, setShowOtp] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const isValidEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isBtnEnable = !showOtp
    ? password !== '' && isValidEmail(email)
    : password !== '' && isValidEmail(email) && otp !== '';

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosInstance.post('/users/send-otp/login', {
        email,
        password,
      });

      if (response.data.statusCode === 201) {
        setShowOtp(true);
      } else {
        alert('Không thể gửi OTP');
      }
    } catch (error) {
      alert('Không thể gửi OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!showOtp) {
        await handleSendOTP(e);
      } else {
        const response = await axiosInstance.post('/users/verify-otp/login', {
          email,
          password,
          otp,
        });

        if (response.data.statusCode === 200) {
          localStorage.setItem('accessToken', response.data.data.accessToken);
          alert('Đăng nhập thành công');
          navigate('/');
        }
      }
    } catch (error) {
      alert('Mã OTP không chính xác hoặc đã hết hạn');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-auth w-full h-svh flex flex-col justify-around items-center px-[2.5rem]">
        <div id="stars" className={styled.stars}></div>
        <div className="w-full mx-auto md:mt-0 md:w-[25.5rem] md:h-[35rem] md:p-[2.5rem] md:bg-neutral1-5 md:rounded-[2rem] md:shadow-auth-card md:backdrop-blur-[3.125rem]">
          <div className="flex flex-col mb-[2.5rem] items-center gap-6">
            <CircleButton className="size-[3.75rem] p-[1.125rem]">
              <img src="/svg/circle_logo.svg" alt="Bento Logo" />
            </CircleButton>
            <Typography level="h4" className="text-primary">
              {showOtp ? 'Nhập OTP' : 'Đăng nhập vào SNet'}
            </Typography>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-[0.875rem] mb-[1.5rem]">
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
                    className="absolute right-2 top-2 cursor-pointer"
                  />
                }
              />
              {showOtp && (
                <Input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Button
                type="submit"
                className="w-full base px-[2rem] py-[0.875rem] text-secondary text-sm font-semibold opacity-100"
                child={
                  <Typography level="base2sm">
                    {loading
                      ? 'Đang xử lý ...'
                      : showOtp
                        ? 'Đăng nhâp'
                        : 'Gửi OTP'}
                  </Typography>
                }
                disabled={!isBtnEnable || loading}
              />

              <Button
                className="w-full px-[2rem] py-[0.875rem]"
                child={
                  <div className="flex items-center gap-3 justify-center">
                    <img
                      src="/svg/ic_google.svg"
                      alt="Google Logo"
                      className="w-5 h-5"
                    />
                    <Typography level="base2sm" className="text-secondary">
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
                <a href="/register" className="opacity-100 font-semibold">
                  <Typography level="captionsm" className="opacity-100">
                    Tạo tài khoản!
                  </Typography>
                </a>
              </Typography>
            </div>
          </form>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-6 md:justify-center md:items-center">
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
