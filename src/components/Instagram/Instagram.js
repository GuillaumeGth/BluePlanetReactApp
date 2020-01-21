import React from "react";
import { InstagramContainer, InstaTitle } from "./style";
import useAbortableFetch from "use-abortable-fetch";
import InstagramUnit from "./InstagramUnit";
import StackGrid from "react-stack-grid";

const Instagram = props => {
  const { data, loading, error } = useAbortableFetch(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=12574986019.1677ed0.2340fa9c44144f5a99873908cf1f2d5a"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  if (!props.visible) return <></>;
  return (
    <InstagramContainer>
      <InstaTitle
        href="https://www.instagram.com/blueplanetdiveresort_"
        class="insta-title"
        target="blank"
      >
        Follow Us On Instagram
      </InstaTitle>
      <StackGrid columnWidth={550}>
        {data.data.map(function(e) {
          var caption = e.caption;
          if (caption) {
            caption = caption.text;
          }
          if (e.type === "video") {
            return (
              <InstagramUnit
                key={e.id}
                caption={e.caption}
                type={e.type}
                src={e.videos.standard_resolution.url}
                alt={e.caption}
                media={e.videos}
                fullObject={e}
              />
            );
          } else {
            return (
              <InstagramUnit
                key={e.id}
                caption={e.caption}
                type={e.type}
                src={e.images.standard_resolution.url}
                alt={e.caption}
                media={e.images}
                like={e.likes.count}
                location={e.location}
                instagram={e}
              />
            );
          }
        })}
      </StackGrid>
    </InstagramContainer>
  );
};

export default Instagram;
