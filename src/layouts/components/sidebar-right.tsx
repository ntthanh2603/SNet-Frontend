import React from 'react';
import { AvtGroupExpand } from '@components/avatar';
import ProfileCard from '@components/profile-card/profile-card';
import ToggleGroup from '@components/toggle-group/toggle-group';
import { TrendingTopicCard } from '@components/trending-topic-card';
import { _avatarData as fakeAvatarData } from '@_mocks/_avatar';
import { _trendingData as fakeTrending } from '@_mocks/_trending';
import { useLocation } from 'react-router-dom';
import { Typography } from '@components/typography';

//-------------------------------------------------------------------------

export default function SidebarRight() {
  const [activeTab, setActiveTab] = React.useState('1');
  const location = useLocation();

  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const isFollowingPage = location.pathname === '/following';

  return (
    <section className="bg-background-secondary fixed top-0 right-0 min-h-full flex flex-col p-3 gap-3 w-85 2xl:w-120">
      {!isFollowingPage && (
        <ToggleGroup
          className="w-full p-1 flex justify-between items-center bg-neutral3-60 rounded-[6.25rem]"
          items={[
            { key: '1', label: 'Who to follow' },
            { key: '2', label: 'Trending topics' },
          ]}
          onChange={handleTabChange}
        />
      )}

      {isFollowingPage ? (
        <>
          <Typography
            level="title"
            className="text-tertiary opacity-80 px-3 py-[0.625rem]"
          >
            Trending topics
          </Typography>
          {fakeTrending.map((trending) => (
            <TrendingTopicCard
              key={trending.id}
              thumbnail={trending.thumbnail}
              trendingName={trending.trendingName}
              time={trending.time}
              isNew={trending.isNew}
            />
          ))}
        </>
      ) : (
        <>
          {activeTab === '1' ? (
            <div className="flex flex-col gap-2">
              <ProfileCard
                userName={'Thanh Nguyen'}
                src="https://i.pinimg.com/736x/ac/5c/98/ac5c982d0cd577c8b9d1ef141017b39e.jpg"
                userHandle={'@thanhnguyen'}
              />
              <ProfileCard
                src="https://i.pinimg.com/originals/4a/7e/74/4a7e7438c14c2807c81cba4a99e4cec2.jpg"
                userName={'Vy Tran'}
                userHandle={'@vytrant'}
              />
            </div>
          ) : (
            <>
              {fakeTrending.map((trending) => (
                <TrendingTopicCard
                  thumbnail={trending.thumbnail}
                  key={trending.id}
                  trendingName={trending.trendingName}
                  time={trending.time}
                  isNew={trending.isNew}
                />
              ))}
            </>
          )}
        </>
      )}

      <AvtGroupExpand
        avatars={fakeAvatarData}
        count="1234"
        className="size-[2rem] min-w-[2rem]"
      />
    </section>
  );
}
