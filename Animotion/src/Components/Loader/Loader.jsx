import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}

export default Loader