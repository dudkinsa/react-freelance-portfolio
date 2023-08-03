import React from 'react'
import './btnGitHub.scss';
import gitHubIcon from '../../assets/icons/gitHub-black.svg'


const BtnGitHub = ({link}) => {
  return (
    <a className="btn-outline" href={link} target='_blank' rel="noreferrer">
    <img src={gitHubIcon} alt="gitHub" />
    GitHub repo
</a>
  )
}

export default BtnGitHub