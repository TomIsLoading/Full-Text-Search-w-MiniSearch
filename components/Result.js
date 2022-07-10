import React from "react";

export default function Result({ result }) {
  return (
    <div className="card w-full max-w-[400px] bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{result.title}</h2>
        <p>{result.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-block mt-2">
            Buy Now {result.price}
          </button>
        </div>
      </div>
    </div>
  );
}
