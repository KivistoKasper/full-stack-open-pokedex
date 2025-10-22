import React from 'react'

const DeploymentTest = ({ version }) => {
  return (
    <div className="version">The current version is: {version.toString()}</div>
  )
}

export default DeploymentTest