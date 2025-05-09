import { Cover, ProfileHeader, UserInfo } from './components';
import ToggleGroup from '@components/toggle-group/toggle-group';
import { Newfeed } from '@components/newfeed';
import { _posts as fakePosts } from '@_mocks/_posts';
import { _user as fakeUsers } from '@_mocks/_user';
import { useParams } from 'react-router-dom';

//--------------------------------------------------------------------------------------------------------------------------------

export default function Profile() {
  const { id } = useParams();

  const user = fakeUsers.find((user) => user.id === id);

  return (
    <section className="w-full relative flex flex-col items-center bg-surface min-h-svh pb-[5rem] md:pb-0 lg:mr-[21.25rem] xl:mr-[30rem] transition-all duration-[0.5s]">
      <ProfileHeader />
      <Cover />
      {user ? <UserInfo user={user} /> : <div>User not found</div>}
      <section className="w-full p-3 flex flex-col gap-3">
        <ToggleGroup
          items={[
            { key: '1', label: 'Posts' },
            { key: '2', label: 'Featured' },
            { key: '3', label: 'Media' },
          ]}
        />

        <Newfeed contentType="post" list={fakePosts} />
      </section>
    </section>
  );
}
