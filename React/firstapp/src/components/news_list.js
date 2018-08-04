import React from 'react';

const newsList = (props) => {
    console.log(props)

    const items = props.news.map((item)=>{
        return(
            <div>
                <h2>{item.title}</h2>
                <h3>{item.feed}</h3>
            </div>
        )
    })


    return(
        <div>
            {items}
        </div>
    )
}

export default newsList;