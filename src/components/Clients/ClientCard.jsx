import React from 'react';

const ClientCard = ({img,details,user}) => {
    return (
        <div className="col">
        <div className="card text-center p-5 border-0 shadow-lg">
          <p className="card-text text-muted">
          {details}
          </p>
          <div>
            <img
              src={img}
              className="card-img-top img-fluid w-25"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title fw-bold">{user}</h5>
            <p className="text-muted">Banker</p>
          </div>
        </div>
      </div>
    );
};

export default ClientCard;