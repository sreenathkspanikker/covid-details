import React, { useState, useEffect } from 'react'
import * as Components from "../components";

export const MostEffected = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
      let isLoad = true
      if (isLoad && props.data.length > 0) {
        let value = props.data
        const sum = value.reduce((a, b) => a + b.cases, 0);

        value.sort((a, b) => a.cases < b.cases ? 1 : a.cases > b.cases ? -1 : 0)
        const result = value.slice(0, 3)?.map((items, i) => {
            if (i === 0) {
                const perc = Math.trunc((items.cases / sum ) * 400)
                Object.assign(items, { perc, color: '#6655fe' })
            }
            if (i === 1) {
                const perc = Math.trunc((items.cases / sum ) * 400)
                Object.assign(items, { perc, color: '#9433f0' })
            }
            if (i === 2) {
                const perc = Math.trunc((items.cases / sum ) * 400)
                Object.assign(items, { perc, color: '#b423c1' })
            }
            return items
        })
        setData(result);
      }
      return () => {
        isLoad = false
      }
    }, [props.data])

  return (
      <Components.Cards className="app-total-count" >
        {data?.map((items, idx) => (
            <div className='chart-content' key={idx}>
                <h3>
                    <span>Total Cases</span>{items.cases}<span>{items.country}</span>
                </h3>
                <Components.Cahrt className={`chart-${idx === 0 ? 'one' : (idx === 1 ? 'two' : 'three')}`} textColor={items.color} pathColor={items.color} percent={items.perc}/>
            </div>
        ))}
      </Components.Cards>
  )
}
