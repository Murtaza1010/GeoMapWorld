import React from 'react'
import { SBDisplay, CloseSlideOut, ContentContainer, HeadingContainer, SideSlideOutContainer } from './SBContents.elements'
import CountryInfo from '../../features/CountryInfo/CountryInfo'
export default function SBContents({ icon, isOpen, headingContent, CloseFromOutSide, slideOutTitle, contentStyle, headingStyle, hideButton, mainContent }) {
    return (

        <SBDisplay>
            {CloseFromOutSide && (<CloseSlideOut className={`slide-out-container ${isOpen ? "open" : ""}`} onClick={() => CloseFromOutSide(false)} ></CloseSlideOut>)}
            <SideSlideOutContainer slideOutTitle={slideOutTitle} className={`slide-out-container ${isOpen ? "open" : ""}`}>
                <div>
                    <HeadingContainer style={headingStyle}>
                        {slideOutTitle}
                        {headingContent}
                    </HeadingContainer>
                </div>
                <ContentContainer slideOutTitle={slideOutTitle} className="scrollConent" style={contentStyle}>
                    {mainContent}
                    
                </ContentContainer>
                  

            </SideSlideOutContainer>
        </SBDisplay>

    )
}
