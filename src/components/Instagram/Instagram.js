import React from 'react';
import styled from 'styled-components';
import useAbortableFetch from 'use-abortable-fetch';
import InstagramUnit from './InstagramUnit';
import StackGrid from "react-stack-grid";

const Instagram = (props) =>{
  const InstagramContainer = styled.div`
    width: 100%;
    background: #252627;`;

  const { data, loading, error, abort } = useAbortableFetch(
    'https://api.instagram.com/v1/users/self/media/recent/?access_token=12574986019.1677ed0.2340fa9c44144f5a99873908cf1f2d5a'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
 
return <InstagramContainer>
        <StackGrid columnWidth={550}>
      {data.data.map(function(e){
        var caption = e.caption;
        if (caption){
          caption=caption.text;
        }
        if(e.type === 'video'){
          return (<InstagramUnit key={e.id} type={e.type} src={e.videos.standard_resolution.url} alt={e.caption} media={e.videos}/>);        
        }
        else{
          return (<InstagramUnit key={e.id} type={e.type} src={e.images.standard_resolution.url} alt={e.caption} media={e.images}/>);        
        }})}        
      </StackGrid>
      </InstagramContainer>;
}

export default Instagram;