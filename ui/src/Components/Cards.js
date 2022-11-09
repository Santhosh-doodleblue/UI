import React from "react";

function Cards({ data }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.map((list) => {
            const { icon, title, text } = list;
            return (
              <>
                <div className="col-md-4 p-5">
                  <div className="card text-center">
                    <h1 className="card-title my-4">{icon}</h1>
                    <h4 className="card-title my-2">{title}</h4>
                    <p className="card-text my-4 mb-5 p-3">{text}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
