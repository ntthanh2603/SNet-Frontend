import React from 'react';
import {
  BookmarkIcon,
  CommentIcon,
  HeartIcon,
  MoreIcon,
  RepostIcon,
  ShareIcon,
} from '@components/icons';
import { Typography } from '@components/typography';
import type { Post } from '@interfaces/post';
import { ReactItem } from './react-item';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@components/avatar';
import { MoreOptions } from '@components/more-options';

//--------------------------------------------------------------------------------------------------------

export default function Post({ post }: any) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isReposted, setIsReposted] = React.useState(false);
  const navigate = useNavigate();
  const [isMoreOptions, setIsMoreOptions] = React.useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  const handleRepostClick = () => {
    setIsReposted(!isReposted);
  };

  const handleMoreOptions = () => {
    setIsMoreOptions(!isMoreOptions);
  };

  return (
    <div className="relative w-full flex flex-col rounded-[1.25rem] p-3 bg-neutral2-2 gap-3 cursor-pointer">
      <div className="flex items-start gap-5">
        <Avatar
          alt="avatar"
          src={
            post.user?.avatar ||
            'https://i.pinimg.com/originals/d3/6f/ef/d36fef4f4885354afcfd3753dee95741.jpg'
          }
          avtClassName="rounded-full min-w-[2.75rem] size-[2.75rem] object-cover"
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-items-auto items-center">
            <Typography
              level="base2m"
              className="text-primary justify-self-start opacity-80 mr-4"
            >
              {post.user?.name}
            </Typography>
            <Typography
              level="captionr"
              className="text-tertiary justify-self-start grow opacity-45"
            >
              {post.user?.time}
            </Typography>

            <MoreIcon onClick={handleMoreOptions} />

            {isMoreOptions && <MoreOptions />}
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: post.content?.text }}
            level="body2r"
            className="text-secondary opacity-80"
          />

          {post.content?.image && (
            <img
              src={post.content.image}
              alt="post-image"
              loading="lazy"
              className="max-h-[20rem] md:max-h-[22.5rem] w-full rounded-[1.5rem] object-cover"
              onClick={() => {
                navigate(`/posts/${post.id}`);
              }}
            />
          )}
        </div>
      </div>

      <div className="flex justify-end items-center md:justify-start md:pl-[48px]">
        <ReactItem
          value={post.interactions?.likes || 0}
          icon={<HeartIcon isActive={isLiked} />}
          onClick={handleLikeClick}
        />

        <ReactItem
          onClick={handleRepostClick}
          value={post.interactions?.reposts || 0}
          icon={<RepostIcon isActive={isReposted} />}
        />

        <ReactItem
          value={post.interactions?.comments || 0}
          icon={<CommentIcon />}
        />

        <div className="flex items-center md:grow justify-end gap-4">
          <BookmarkIcon height={24} width={24} />
          <ShareIcon height={24} width={24} />
        </div>
      </div>
    </div>
  );
}
