import './MainPage.css';

export default function MainPage({rates, stamp, loading}) {

  const formattedStamp = new Date(stamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <>
      {console.log(rates)}

      <div className='main-table'>
        <table>
          <thead>
            <tr>
              <th>Currency</th>
              <th>Rate</th>
              <th>We Buy</th>
              <th>We Sell</th>
            </tr>
          </thead>
          <tbody>

            {rates.map(rate => (
              <tr key={rate.currency}>
                <td>{rate.currency}</td>
                <td>{rate.rate}</td>
                <td>{rate.buy}</td>
                <td>{rate.sell}</td>
              </tr>
              ))
            }

          </tbody>
        </table>
      </div>
      <div className='main-table-description'>
        <p>rates are based from 1 USD</p>
        <p>last updated: {formattedStamp}</p>
      </div>
    </>
  )
}
