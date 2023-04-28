import React,{ Fragment} from "react";


const Characters = ({characters = [] }) => {

    return(
        <Fragment>
          <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                       <div className="card" style={{minWidth:"200px"}}>
                          <img src={item.image} alt="" />
                          <div className="card-body">
                             <h5 className="card-title">{item.name}</h5>
                             <hr />
                             <p>Species: {item.species}</p>
                             <p>location: {item.location.name}</p>

                          </div>
                       </div>
                    </div>
                ))
            }
          </div>
        </Fragment>
    )
}

export default Characters;