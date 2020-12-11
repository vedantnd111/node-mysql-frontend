import React from 'react'
import {API} from '../configure';

function ShowImage({item,id}) {
    return (
        <div className="product-img">
            <img
            src={`${API}/api/photo/${id}`}
            alt={item.name}
            className="product-img mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
        </div>
    )
}

export default ShowImage
