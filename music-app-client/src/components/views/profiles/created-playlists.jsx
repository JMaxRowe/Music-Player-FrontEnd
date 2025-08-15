import { useEffect, useState } from "react";
import { createdPlaylistsShow } from "../../../services/profiles";
import "./Profile.css";

// Page components
import ErrorPage from "../ErrorPage/ErrorPage";
import { useParams } from "react-router";
import LoadingPage from "../LoadingPage/LoadingPage";

export default function CreatedPlaylists() {
  const { userId } = useParams();
  // * State
  const [profileUser, setProfileUser] = useState(null);
  const [createdPlaylists, setCreatedPlaylists] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCreatedPlaylistsData = async () => {
      setIsLoading(true);
      try {
        const { data } = await createdPlaylistsShow(userId);
        setProfileUser(data.user);
        setCreatedPlaylists(data.createdPlaylists);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCreatedPlaylistsData();
  }, [userId]);

  if (error) return <ErrorPage error={error} />;
  if (isLoading) return <LoadingPage />;
  if (!profileUser) return <LoadingPage />;

  return (
    <>
      <h1>{profileUser.username}'s playlists</h1>
      <hr />
      <div>
        {createdPlaylists.length > 0 ? (
          createdPlaylists.map((createdPlaylist) => {
            return (
              <div key={createdPlaylist._id}>
                <p>{createdPlaylist.title}</p>
              </div>
            );
          })
        ) : (
          <p>There are currently no playlists to display</p>
        )}
      </div>
    </>
  );
}
