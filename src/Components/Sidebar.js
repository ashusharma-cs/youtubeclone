import React from 'react'
import "../sidebar.css"
import SidebarRow from './SidebarRow'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import SubscriptionsSharpIcon from '@mui/icons-material/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@mui/icons-material/VideoLibrarySharp';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>

      <SidebarRow selected Icon ={HomeSharpIcon} title="Home"></SidebarRow>
      <SidebarRow Icon ={WhatshotSharpIcon} title="Trending "></SidebarRow>
      <SidebarRow Icon ={SubscriptionsSharpIcon} title="Subscription"></SidebarRow>

      <hr />


      <SidebarRow Icon ={VideoLibrarySharpIcon} title="Library"></SidebarRow>
      <SidebarRow Icon ={HistorySharpIcon} title="History "></SidebarRow>
      <SidebarRow Icon ={SmartDisplayOutlinedIcon} title="Your Videos"></SidebarRow>
      <SidebarRow Icon ={AccessTimeSharpIcon} title="Watch Later"></SidebarRow>
      <SidebarRow Icon ={ThumbUpOutlinedIcon} title="Liked Videos"></SidebarRow>

      <hr />

    </div>
  )
}

export default Sidebar
