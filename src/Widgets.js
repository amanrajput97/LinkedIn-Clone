import React from 'react'
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

  const newsArticle=(heading, subtitle)=> (
          <div className='widgets__article'>
            <div className='widgets__articleLeft'>
              <FiberManualRecordIcon />
            </div>

            <div className='widgets__articleRight'>
              <h4>{heading}</h4>
              <p>{subtitle}</p>
            </div>
          </div>
  )

  return (
    <div className='widgets'>
        <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />

        </div>
        {newsArticle("Thank you so much for Signing up to ASR's LinkedIN Clone",'Top news - 999999+ readers')}
        {newsArticle("ASR is best valorant player",'Top news - 999 readers')}
        {newsArticle("22-year-old in custody after mass shooting in Chicago during US independence day parade 22-year-old in custody after mass shooting in Chicago during US independence day parade",'International news - 600 readers')}
        {newsArticle("Jammu and Kashmir Congress president Ghulam Ahmad Mir resigns Jammu and Kashmir Congress president Ghulam Ahmad Mir resigns",'National news - 100000 readers')}
        {newsArticle("Galaxy Watch 5 leak gives best look yet at Samsung’s upcoming smartwatches",'Techie Delight news - 78999 readers')}
        {newsArticle("Amazon Prime day sale abbout to go Live on 23rd - 24th July in India",'Top news - 616 readers')}
        

    </div>
    
  )
}

export default Widgets