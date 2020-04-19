import React, { useState, useEffect } from "react";
import { InstagramContainer, InstaTitle } from "./style";
import FlexContainer from "../Layout/FlexContainer";
import InstagramUnit from "./InstagramUnit";
import StackGrid from "react-stack-grid";
import { isBrowser } from "react-device-detect";
import InfiniteScroll from "react-infinite-scroller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
// import { fa } from "@fortawesome/free-solid-svg-icons-svg-icons";
const Instagram = (props) => {
  let stackgrid;
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState();
  const [loaded, setLoaded] = useState();
  const [nextUrl, setNextUrl] = useState(
    "https://api.instagram.com/v1/users/self/media/recent/?access_token=12574986019.1677ed0.2340fa9c44144f5a99873908cf1f2d5a"
  );
  const loadPictures = () => {
    setLoaded(true);
    if (!hasMore) {
      return;
    }
    fetch(nextUrl)
      .then((e) => e.json())
      .then((res) => {
        if (Object.keys(res).indexOf("error_type") > -1) {
          setData(res);
          return;
        }
        if (res.data) {
          let pictures = data || res.data;
          if (loaded) {
            pictures = res.data.concat(pictures);
            pictures = pictures.reduce(function (acc, cur, i) {
              acc[cur.id] = cur;
              return acc;
            }, {}).values;
          }
          if (res.pagination.next_url) {
            setNextUrl(res.pagination.next_url);
          } else {
            setHasMore(false);
          }
          setData(pictures);
        }
      })
      .catch((e) => {
        setData(e);
      });
  };
  useEffect(() => {
    if (!loaded) {
      loadPictures();
    }
    if (stackgrid) {
      stackgrid.updateLayout();
    }
  });
  const renderPictures = () => {
    if (!data) return <div>Loading</div>;
    let i = 0;
    return data.map(function (e) {
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
            instagram={e}
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
    });
  };
  debugger;
  if (!data) return null;
  if (!props.visible) return <></>;
  if (data.error_type) return <FlexContainer>Loading Error!</FlexContainer>;
  return (
    <InstagramContainer>
      <InstaTitle
        href="https://www.instagram.com/blueplanetdiveresort_"
        className="insta-title"
        target="blank"
      >
        Follow Us On Instagram
      </InstaTitle>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadPictures}
        hasMore={hasMore}
        loader={
          <FontAwesomeIcon
            icon={faArrowAltCircleDown}
            spin
            key={"loader"}
          ></FontAwesomeIcon>
        }
      >
        {isBrowser
          ? // <StackGrid columnWidth={550} gridRef={(grid) => (stackgrid = grid)}>
            renderPictures()
          : // </StackGrid>
            renderPictures()}
      </InfiniteScroll>
    </InstagramContainer>
  );
};

export default Instagram;
