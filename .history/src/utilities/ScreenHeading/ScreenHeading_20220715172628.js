import React from 'react'

export default function ScreenHeading() {
  return (
    <div className='heding-container'>
        <div className='screen-heding'>
            <span>{props.title}</span>
        </div>

        {
            (props.subHeading)?(
                <div className='screen-sub-heading'>
                    <span>{props.subHeading}</span>
                </div>
            ):<div></div>
        }
    </div>
  )
}
