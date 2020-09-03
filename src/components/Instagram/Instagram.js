import React from "react";
import { InstagramContainer, InstaTitle } from "./style";
import useAbortableFetch from "use-abortable-fetch";
import InstagramUnit from "./InstagramUnit";
import StackGrid from "react-stack-grid";
import { isBrowser } from "react-device-detect";
const Instagram = (props) => {
  const { data, loading } = useAbortableFetch(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=12574986019.1677ed0.2340fa9c44144f5a99873908cf1f2d5a"
  );
  const renderPictures = () => {
    debugger;
    if (!data.data) {
      return;
    }
    return data.data.map(function (e) {
      var caption = e.caption;
      if (caption) {
        caption = caption.text;
      }
      if (e.type === "video" && e.videos.standard_resolution != null) {
        return (
          <>
            <InstagramUnit
              key={e.id}
              caption={e.caption}
              type={e.type}
              src={e.videos.standard_resolution.url}
              alt={e.caption}
              media={e.videos}
              instagram={e}
            />
          </>
        );
      } else if (e.type === "image" && e.images.standard_resolution) {
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
    });
  };
  if (loading) return <div>Loading...</div>;
  if (!props.visible) return <></>;
  return (
    <InstagramContainer>
      <InstaTitle
        href="https://www.instagram.com/blueplanetdiveresort_"
        className="insta-title"
        target="blank"
      >
        Follow Us On Instagram
      </InstaTitle>
      {isBrowser ? (
        <StackGrid columnWidth={550}>{renderPictures()}</StackGrid>
      ) : (
        renderPictures()
      )}
    </InstagramContainer>
  );
};

export default Instagram;
