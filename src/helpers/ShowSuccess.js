import React from 'react'

function showSuccess({success,msg,initial}) {
    return <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
        <h3> {initial} {msg} is successfully created!!</h3>
    </div>
}

export default showSuccess
